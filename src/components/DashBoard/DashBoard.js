import React, { useState, useEffect } from "react";

import { db } from "../../firebase/firebase";

import NoteForm from "../NoteForm/NoteForm";
import Header from "../Header/Header";
import Journal from "../journal/Journal";

function DashBaord() {
  const [user, setUser] = useState({});
  const [noteArray, setNoteArray] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    function fetchData() {
      db.collection("users")
        .where(`accessToken`, "==", `${token}`)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            setUser(doc.data());
            localStorage.setItem("email", doc.data().email);
          });
        });
    }

    fetchData();
  }, []);

  useEffect(() => {
    const email = localStorage.getItem("email");
    function fetchNotes() {
      db.collection("users")
        .where(`email`, "==", `${email}`)
        .onSnapshot(function(querySnapshot) {
          querySnapshot.forEach(doc => {
            setNoteArray(doc.data().notes);
          });
        });
    }

    fetchNotes();
  }, []);

  return (
    <div>
      <Header noteUser={user} />
      <section className="board-center">
        <NoteForm />
        <hr style={{ height: "5px" }} />
        <Journal prevNotes={noteArray} />
      </section>
    </div>
  );
}

export default DashBaord;

import React, { useState, useEffect } from "react";

import { db } from "../../firebase/firebase";

import NoteForm from "../NoteForm/NoteForm";
import Header from "../Header/Header";
import Journal from "../journal/Journal";

function DashBaord() {
  const token = localStorage.getItem("token");
  console.log("token", token);
  const [user, setUser] = useState({});

  function fetchData() {
    db.collection("users")
      .where(`accessToken`, "==", `${token}`)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setUser(doc.data());
        });
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header noteUser={user} />
      <section className="board-center">
        <NoteForm />
        <hr style={{ height: "5px" }} />
        <Journal />
      </section>
    </div>
  );
}

export default DashBaord;

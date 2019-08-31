import React from "react";

import NoteCard from "../NoteCard/NoteCard";

function Journal({prevNotes}) {

  return (
    <div className="journal board-center">
      <section className="section mySection">
        <div className="container">
          <h1 className="title" style={{ marginBottom: "50px" }}>
            Recently Addded
          </h1>
          <div className="class-shelf">
            {prevNotes.map(note => {
              return <NoteCard data={note} key={note.title} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Journal;

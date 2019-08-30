import React from "react";

import NoteCard from "../NoteCard/NoteCard";

function Journal() {
  return (
    <div className="journal board-center">
      <section className="section mySection">
        <div className="container">
          <h1 className="title" style={{ marginBottom: "50px" }}>
            Recently Addded
          </h1>
          <div className="class-shelf">
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Journal;

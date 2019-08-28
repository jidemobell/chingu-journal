import React from 'react'

import NoteCard from '../NoteCard/NoteCard'

function Journal(){
    return (
  <section className="section mySection">
    <div className="container">
      <h1 className="title" style={{ marginBottom: "50px" }}>Recently Addded</h1>
      {/* <h2 className="subtitle">
        Recently Addded
      </h2> */}
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

    )
}

export default Journal
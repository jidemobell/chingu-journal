import React from "react";

function NoteCard({data}) {
  return (
    <section className="notecard">
      <div className="card my-card">
        <header className="card-header">
          <p className="card-header-title">{data.title}</p>
          <a
            href="http://fakelink"
            className="card-header-icon"
            aria-label="more options"
          >
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </a>
        </header>
        <div className="card-content">
          <div className="content">
            {data.note}
          </div>
        </div>
        <footer className="card-footer">
          <a href="http://fakelink" className="card-footer-item">
            Edit
          </a>
          <a href="http://fakelink" className="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
    </section>
  );
}

export default NoteCard;

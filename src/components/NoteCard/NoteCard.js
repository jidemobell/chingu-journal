import React from "react";

function NoteCard() {
  return (
    <section className="notecard">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">NoteTitle</p>
          <a href="#" className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </a>
        </header>
        <div className="card-content">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
          </div>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">
            Edit
          </a>
          <a href="#" className="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
    </section>
  );
}

export default NoteCard;

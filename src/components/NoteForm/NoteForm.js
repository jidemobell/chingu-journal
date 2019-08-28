import React from "react";

function NoteForm() {
  return (
    <section className="noter">
      <div className="form-container">
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field">
          <label className="label">Note</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea" />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
          <div className="control">
            <button className="button is-light">Cancel</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoteForm;

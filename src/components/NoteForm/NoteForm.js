import React,{useState} from "react";

import { addNote } from '../../controller/firebase'

function NoteForm() {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  return (
    <section className="noter">
      <form className="form-container"
       onSubmit={(e) => {
         e.preventDefault()
         const elementsArray = e.target.elements !== undefined && e.target.elements
         Array(elementsArray).filter(tag => {   
           setTitle(tag[0].value)
           setNote(tag[1].value)  
           const email = localStorage.getItem('email')
           return addNote(email,"users", tag[0].value, tag[1].value )
           .then(() => {
             setTitle('')
             setTitle('')
           })
         })
       }}
      >
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" defaultValue={title} />
          </div>
        </div>

        <div className="field">
          <label className="label">Note</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea" defaultValue={note} />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary edit-button" type="submit">SAVE NOTE</button>
          </div>
          <div className="control">
            <button className="button is-light">Cancel</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default NoteForm;

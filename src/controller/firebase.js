import firebase, { db } from "../firebase/firebase";

// function to add a new note
export async function addNote(user, collection, title, note) {
  const userRef = db.collection(collection).doc(`${user}`);
  try {
    await userRef.update({
      notes: firebase.firestore.FieldValue.arrayUnion({
        title,
        note
      })
    });
  } catch (err) {
    console.error("error adding note", err);
  }
}

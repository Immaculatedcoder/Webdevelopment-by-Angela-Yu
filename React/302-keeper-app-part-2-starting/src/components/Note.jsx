import React from "react";
import notes from "../notes";

function generateNote(note) {
  return (
  <div className="note" key={note.key}>
    <h1> {note.title}</h1>
    <p> {note.content}</p>
  </div> );
}

function Note() {
  return (
    notes.map(generateNote)
  );
}

export default Note;

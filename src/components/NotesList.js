import React from 'react'
import Note from './Note'
import CreateNewNote from './CreateNewNote'
import './NotesList.css'

function NotesList({ notes, handleAddNote, handleDeleteNote }) {               // note list component is essentially to apply grid format to the application
  return (
    <div className="notes-list">
        {notes.map((note) => (
            <Note 
            id={note.id} 
            text={note.text} 
            date={note.date} 
            handleDeleteNote={handleDeleteNote} />
        ))}        
    <CreateNewNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesList
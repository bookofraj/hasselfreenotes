import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Navbar from './Navbar';
import NotesList from './components/NotesList';
import './App.css';

function App() {

  const [notes, setNotes] = useState([])

  useEffect(() => {                                                          // retriving the saved notes if any 
    const savedNotes = JSON.parse(
      localStorage.getItem('notes-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  },[]);

  useEffect(() => {                                                           // saving the note on local storage
    localStorage.setItem('notes-data', JSON.stringify(notes));
  }
    , [notes]);

  const insertNote = (text) => {                                              // generating json data for new note
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const psuedoNotes = [...notes, newNote];
    setNotes(psuedoNotes);
  }

  const deleteNote = (id) => {                                                // hard deleting the note from its id 
    const psuedoNotes = notes.filter((note) => (note.id !== id));
    setNotes(psuedoNotes);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <NotesList notes={notes} handleAddNote={insertNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;

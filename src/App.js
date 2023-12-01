import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Navbar from './Navbar';
import NotesList from './components/NotesList';
import SideMenu from './components/SideMenu';
import './App.css';

function App() {

  const [sided, setSided] = useState(false);
  const handleSided =() =>{
    setSided(!sided);
  }

  const [notes, setNotes] = useState([]);

  const [ darkMode, setDarkMode ] = useState(false);
  const handleDarkMode = () =>{
    setDarkMode(!darkMode);
  }

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
      <Navbar darkMode={darkMode} handleSided={handleSided} />
      <SideMenu handleDarkMode={handleDarkMode} darkMode={darkMode} sided={sided} />
      <div className={`${darkMode?'dark-app-container':'app-container'}`}>
        <NotesList notes={notes} handleAddNote={insertNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;

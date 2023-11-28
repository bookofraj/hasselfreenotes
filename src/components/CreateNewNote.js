import React, { useState } from 'react'
import './CreateNewNote.css'

function CreateNewNote({ handleAddNote }) {

  const [addText, setAddText] = useState('');

  const handleAddText = (event) => (
    setAddText(event.target.value)
  )

  const handleSaveClick = () => {
    if (addText.trim()) {
      handleAddNote(addText);
    }
    setAddText('');
  }

  return (                                           // taking text for creating a new note and sending it to parent component app.js                  
    <div className='create-new-note'>
      <div className="new-note-area">
        <textarea
          name='add note'
          placeholder='Create New Note...'
          rows={8}
          cols={30}
          value={addText}
          onChange={handleAddText}></textarea>
      </div>
      <div className="new-note-footer">
        <p>Character Count: {addText.length}</p>
        <button 
        className="btn" 
        onClick={handleSaveClick}>
          Save
          </button>
      </div>
    </div>
  )
}

export default CreateNewNote
import React from 'react'
import './Note.css'

function Note( { id , text , date , handleDeleteNote } ) {                  // note component to render the individual note json data
    return (
        <div className='note'>
            <div className="note-area">
                <span>{ text }</span>
            </div>
            <div className="note-footer">
                <p>{ date }</p>
                <span 
                onClick={ () => handleDeleteNote(id)} 
                className="material-symbols-outlined">
                    delete
                </span>
            </div>
        </div>
    )
}

export default Note
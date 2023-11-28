import React from 'react'
import logo from './assests/notes-logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftnav">
        <img src={logo} alt="logo" />
        <p>Take Notes Hassel Free !</p>
      </div>
      <div className="rightnav">
        <input type="checkbox" id='menu' />
        <label htmlFor="menu">
          <span class="material-symbols-outlined">
            menu
          </span>
        </label>
      </div>
    </div>
  )
}

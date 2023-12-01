import logo from './assests/notes-logo.png'
import './Navbar.css'

export default function Navbar({ darkMode, handleSided }) {

  return (
    <div className={`${darkMode?"darkNavbar":"Navbar"}`}>
      <div className="leftnav">
        <img src={logo} alt="logo" />
        <p>Take Notes Hassel Free !</p>
      </div>
      <div className="rightnav">
        <input type="checkbox" id='menu' onClick={handleSided}/>
        <label htmlFor="menu">
          <span style={{
            backgroundColor: 'white', 
            border: '2px solid black',
            borderRadius: '5px', 
            boxShadow: '3px 3px 5px black'}} 
            class="material-symbols-outlined">
            menu
          </span>
        </label>
      </div>
    </div>
  )
}

import React from 'react'
import './SideMenu.css'
import '../Navbar.css'

function Sidemenu({ handleDarkMode, darkMode, sided }) {
  return (
    <div className={`${darkMode?"darkSideMenu":"SideMenu"}${sided?" SideMenuSided":""}`}>
        <ul className="menulist">
            <li className='btn'>Sign In</li>
            <li className='btn'><button onClick={ handleDarkMode}>Toggle Dark Mode</button></li>
        </ul>
    </div>
  )
}

export default Sidemenu
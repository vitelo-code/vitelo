import React from 'react'
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='vitelo__Navbar'>
      <div className='vitelo__Navbar-content'>
        <div>
          <a href="#home">
            <h1>/ Vitelo</h1>
          </a>
        </div>
        <div>
          <a href="#contact">
            <p>contact</p>
          </a>
          <span className='vitelo__Navbar-content_button'>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
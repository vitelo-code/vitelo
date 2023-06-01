import React from 'react'
import profileImg from '../../Assets/images/profileImg.png'
import './header.css';

const Header = () => {
  return (
    <header className='vitelo__header section__padding'>
      <div className="vitelo__header-container">
        <div className="vitelo__header-container_profileImg">
          <img src={profileImg} alt='profileImg' />
        </div>
        <div className="vitelo__header-container_text">
      <h1>Hi there!</h1>
      <p>My name is Vitelo.</p>
      <p>
      I’m a software developer passionate about learning new skills, playing bass, 3D videogames landscape building, photography and tech in general.
      </p>
      </div>
      </div>
    </header>
  )
}

export default Header
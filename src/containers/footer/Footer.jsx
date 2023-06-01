import React from 'react'
import './footer.css';
import { github, instagram, linkedin } from './imports';


const Footer = () => {
  return (
    <footer className='vitelo__footer'>
      <div className='vitelo__footer-container'>
        <div>
          <span className='vitelo__footer-container_copyright'>
            <p>© 2023 Vitelo</p>
          </span>
        </div>
        <div>
          <nav className='vitelo__footer-container_links'>
            <a href="https://github.com/vitelo-code"><img src={github} alt='Github'/></a>
            <a href="https://www.linkedin.com/in/roberto-hernandez2107/"><img src={ linkedin } alt='LinkedIn' /></a>
            <a href="https://www.instagram.com/vitelo/"><img src={ instagram } alt='Instagram' /></a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
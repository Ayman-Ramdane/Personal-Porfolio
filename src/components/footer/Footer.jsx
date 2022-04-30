import React from 'react'
import './footer.css'
import '../nav/nav.css'
import { GrLinkedinOption } from 'react-icons/gr'
import { RiGithubLine } from 'react-icons/ri'
import { useState } from 'react'

const Footer = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <footer>
      <a href="#" className='footer__logo'>Ayman RAMDANE</a>

      <ul className='permalinks'>
        <li><a href="#" onClick={() => setActiveNav('#')}>Accueil</a></li>
        <li><a href="#about" onClick={() => setActiveNav('about')}>À Propos</a></li>
        <li><a href="#experience" onClick={() => setActiveNav('experience')}>Experience</a></li>
        <li><a href="#portfolio" onClick={() => setActiveNav('portfolio')}>Portfolio</a></li>
        <li><a href="#contact" onClick={() => setActiveNav('contact')}>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ayman-ramdane-b36b39212/" target='_blank'> <GrLinkedinOption /></a>
        <a href="https://github.com/Ayman-Ramdane" target='_blank'> <RiGithubLine /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ayman RAMDANE. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
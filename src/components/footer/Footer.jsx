import React from 'react'
import './footer.css'
import { GrLinkedinOption } from 'react-icons/gr'
import { RiGithubLine } from 'react-icons/ri'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ayman RAMDANE</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
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

export default footer
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me_transparent_background.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour je suis</h5>
        <h1>Ayman RAMDANE</h1>
        <h5 className="text-light">Étudiant Ingénieur en Numérique en M1</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Bas de page</a>
      </div>
    </header>
  )
}

export default Header
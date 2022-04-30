import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpg'
import ME from '../../assets/About-Me.png'
import { FaAward } from 'react-icons/fa'
import { VscFolderOpened } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5> En apprendre plus </h5>
      <h2> Sur moi </h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Années</small>
            </article>

            <article className='about__card'>
              <VscFolderOpened className='about__icon' />
              <h5>Projets</h5>
              <small>5+ projets complétés</small>
            </article>

          </div>
          <p>
            Actuellement étudiant en Master 1 à l'EPF en Majeure Ingénierie et Numérique.
            Mon parcours en études supérieures a commencé par 2 années en classe préparatoire MPSI/MP où j'ai pu acquérir
            un socle de connaissances scientifiques et le sens de l'organisation nécessaire pour accomplir mes tâches.
            Mon parcours à l'EPF m'a quant à lui permis d'acquérir les connaissances techniques nécessaires pour le métier de
            développeur. De plus, j'ai aussi pu acquérir et développer mes compétencecs en gestion de projet à travers les
            projets scolaires mais aussi grâce au stage effectué au cours de la formation.
          </p>

          <a href="#contact" className='btn btn-primary'>Contactez moi</a>

        </div>
      </div>
    </section>
  )
}

export default About
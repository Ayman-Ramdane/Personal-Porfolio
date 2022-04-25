import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpg'
import ME from '../../assets/About-Me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderOpened } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2> About Me</h2>

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
              <h5>card 1</h5>
              <small>Detail Card 3</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>card 2</h5>
              <small>Detail Card 2</small>
            </article>

            <article className='about__card'>
              <VscFolderOpened className='about__icon' />
              <h5>card 3</h5>
              <small>Detail Card 3</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Consectetur corporis temporibus deserunt deleniti.
            Tempora magni, cum deleniti culpa id ab maiores doloribus, quasi iste reiciendis dolorum repellat!
            Vel, laboriosam dolorum!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
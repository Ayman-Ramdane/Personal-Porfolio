import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const dataFrontend = [
  {
    id: 1,
    competence: "HTML"
  },
  {
    id: 2,
    competence: "CSS"
  },
  {
    id: 3,
    competence: "Javascript"
  },
  {
    id: 4,
    competence: "Bootstrap"
  },
  {
    id: 5,
    competence: "React"
  },
  {
    id: 6,
    competence: "React-native"
  },
];

const dataBackend = [
  {
    id: 1,
    competence: "NodeJS"
  },
  {
    id: 2,
    competence: "SQL"
  },
  {
    id: 3,
    competence: "Java"
  },
  {
    id: 4,
    competence: "Kotlin"
  },
  {
    id: 5,
    competence: "PHP"
  },
  {
    id: 6,
    competence: "Python"
  },
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Quelles sont mes compétences</h5>
      <h2>Mon Experience</h2>

      <div className='container experience__container'>
        <div className='experience_frontend'>
          <h3>Frontend</h3>
          <div className='experience__content'>
            {
              dataFrontend.map(({ id, competence }) => {
                return (
                  <article key={id} className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                      <h4>{competence}</h4>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>

        <div className='experience_backend'>
          <h3>Backend</h3>
          <div className='experience__content'>
            {
              dataBackend.map(({ id, competence }) => {
                return (
                  <article key={id} className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                      <h4>{competence}</h4>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
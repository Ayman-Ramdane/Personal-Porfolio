import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Rent Manager en Java",
    github: "https://github.com/Ayman-Ramdane/epfRentManager",
  },
  {
    id: 2,
    image: IMG2,
    title: "Application de suivi de demandes d'outillages",
    github: "#Not On Github",
  },
  {
    id: 3,
    image: IMG2,
    title: "Interface de suivi d'évolution de besoins clients",
    github: "#Not On Github",
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mes travaux récents</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
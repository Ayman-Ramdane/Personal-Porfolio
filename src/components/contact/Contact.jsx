import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { MdOutlineSchool } from 'react-icons/md'
import { MdLanguage } from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>N'hésitez pas</h5>
      <h2>Contactez Moi</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <GoLocation className='contact__option-icon' />
            <h4>Lieu : Paris, France</h4>
          </article>

          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email : ayman.ramdane@epfedu.fr</h4>
          </article>

          <article className='contact__option'>
            <MdOutlineSchool className='contact__option-icon' />
            <h4>Éducation : EPF École d'ingénieur.e.s, Cachan</h4>
          </article>

          <article className='contact__option'>
            <MdLanguage className='contact__option-icon' />
            <h4>Langues : Français, Anglais, Espagnol</h4>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Votre Nom Complet' required />
          <input type="text" name='email' placeholder='Votre Email' required />
          <textarea name="message" rows='7' placeholder='Votre Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
import React from 'react'
import CV from "../../assets/CV RAMDANE Ayman.pdf"

// Composant permettant de définir les boutons dans l'entête. CTA = "Call To Action"
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Téléchargez mon CV</a>
      <a href='#contact' className='btn btn-primary'>Contactez moi</a>
    </div>
  )
}

export default CTA
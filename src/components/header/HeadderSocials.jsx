import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeadderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ayman-ramdane-b36b39212/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Ayman-Ramdane" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeadderSocials
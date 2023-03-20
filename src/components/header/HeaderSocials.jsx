import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/murilo-silva-5a873723b" target='_blank'><FiLinkedin/></a>
        <a href="https://github.com/Murilodevsilva" target='_blank'><FiGithub/></a>
        <a href="https://www.instagram.com/devpartnerweb" target='_blank'><FiInstagram/></a>
        </div>
  )
}

export default HeaderSocials
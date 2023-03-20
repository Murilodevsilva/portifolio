import React, {useState} from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {FaUserTie} from 'react-icons/fa'
import {GiBookCover} from 'react-icons/gi'
import {SiLegacygames} from 'react-icons/si'
import {RiMessage2Line} from 'react-icons/ri'

import {} from 'react-icons'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserTie/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiBookCover/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><SiLegacygames/></a>
      <a href="#contact"onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Line/></a>
    </nav>
  )
}

export default Nav
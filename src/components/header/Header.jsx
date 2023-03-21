import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/bg-image-me.svg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
    <div className='container header__container'>
      <h5>Olá, eu sou</h5>
      <h1>Murilo Silva</h1>
      <h5 className='text-light'>
        Desenvolvedor Fron-End
      </h5>
      <CTA />
      <HeaderSocials/>
      <div className='me'>
        <img src={ME} alt="me"  />
      </div>
      <a href='#contact' className='scroll__down'>Scroll finish</a>
      </div>
      </header>
      
  )
}

export default Header
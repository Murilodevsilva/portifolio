import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MURILO SILVA</a>

      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#experience">Experiências</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#testimonials">Testemunhos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="http://facebook.com"><FiFacebook/></a>
        <a href="http://instagram.com"><FiInstagram/></a>
        <a href="http://linkedin.com"><FiLinkedin/></a>
      </div>
      <div className='footem__copyright'>
        <small>&copy; Todos os direitos reservados. Murilo Silva Desenvolvedor.</small>
      </div>
    </footer>
  )
}

export default Footer
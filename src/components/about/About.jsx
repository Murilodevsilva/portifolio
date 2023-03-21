import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import {RiUserSmileFill} from 'react-icons/ri'
import {SiCodeproject} from 'react-icons/si'
import ME from '../../assets/bg-bg.png'
const About = () => {
  return (
    <section id='about'>
      <h5>Quem eu sou na </h5>
      <h2>Programação</h2>

      <div className='container about__container'>
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaAward/>
                <h5>Experiência</h5>
                <small>Mais de 1 ano no mercado de trabalho</small>
              </article>
              <article className='about__card'>
                <SiCodeproject/>
                <h5>Projetos</h5>
                <small>Experiência com projetos em equipe</small>
              </article>
            </div>
            <p>
            Sou um programador web e mobile com o objetivo de criar soluções criativas e funcionais para os usuários, superando as expectativas dos clientes.
            Sou apaixonado por aprender novas tecnologias e tendências do mercado, e tenho habilidades em linguagens de programação como Javascript e frameworks como React JS e React Native. 
            Se precisa de um programador web e mobile experiente e dedicado, estou à disposição para ajudar.
            </p>
            <a href="#contact" className='btn btn-primary'>Entre em contato</a>
          </div>
      </div>
    </section>
  )
}

export default About
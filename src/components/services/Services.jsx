import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>Um parceiro para</h5>
      <h2>Suas necessidades profissionais</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Desenvolvimento Mobile</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação e Desenvolvimento de aplicativos </p>
                  </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação de logo marca </p>
                  </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Layouts para aplicativo</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Paleta de cores </p>
                  </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design completo da aplicação</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Desenvolvimento com as mais novas tecnologias</p>
            </li>
            
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Desenvolvimento Web</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação de landing pages</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação de e-commerce</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Trabalho completo de logo marca</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Layouts para websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Paleta de cores</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Tecnologias aceitas em todo lugar</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
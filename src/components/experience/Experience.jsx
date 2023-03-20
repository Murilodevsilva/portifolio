import React from 'react'
import './experience.css'
import {VscVerifiedFilled} from 'react-icons/vsc'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Minhas experiências e</h5>
      <h2>Como elas podem ajudar você</h2>

      
      <div className='container experience__container'>
        <div className='experience__frontend'>
        <h3>Desenvolvimento Front end</h3>
        <div className='experience__content'>
          <article className='experience__details'>
          <VscVerifiedFilled className='experience__details-icon'/>
         <div>
            <h4>HTML</h4>
            <small className='text-light'>Experiente</small>
         </div>
          </article>
          <article className='experience__details'>
          <VscVerifiedFilled className='experience__details-icon'/>
          <div>
            <h4>CSS</h4>
            <small className='text-light'>Experiente</small>
          </div>
          </article>
          <article className='experience__details'>
          <VscVerifiedFilled className='experience__details-icon'/>
         <div>
          <h4>JAVASCRIPT</h4>
          <small className='text-light'>Experiente</small>
         </div>
          </article>
          <article className='experience__details'>
          <VscVerifiedFilled className='experience__details-icon'/>
          <div>
            <h4>TYPESCRIPT</h4>
            <small className='text-light'>Intermediário</small>
          </div>
          </article>
          <article className='experience__details'>
          <VscVerifiedFilled className='experience__details-icon'/>
          <div>
            <h4>REACT JS</h4>
            <small className='text-light'>Intermediário</small>
          </div>
          </article>
          <article className='experience__details'>
          <VscVerifiedFilled className='experience__details-icon'/>
          <div>
            <h4>REACT N.</h4>
            <small className='text-light'>Intermediário</small>
          </div>
          </article>
          <article className='experience__details'>
          <VscVerifiedFilled className='experience__details-icon'/>
            <div>
              <h4>TAILWIND</h4>
              <small className='text-light'>Intermediário</small>
            </div>
          </article>
          <article className='experience__details'>
          <VscVerifiedFilled className='experience__details-icon'/>
            <div>
              <h4>FIGMA</h4>
              <small className='text-light'>Intermediário</small>
            </div>
          </article>
        </div>
        </div>
        <div className='experience__backend'>
        <h3>Desenvolvimento Back end</h3>
        <div className='experience__content'>
          <article className='experience__details'>
          <VscVerifiedFilled className='experience__details-icon'/>
         <div>
          <h4>NodeJs</h4>
          <small className='text-light'>Iniciante</small>
         </div>
          </article>
          <article className='experience__details'>
          <VscVerifiedFilled className='experience__details-icon'/>
          <div>
            <h4>PHP</h4>
            <small className='text-light'>Estudando...</small>
          </div>
          </article>
          <article className='experience__details'>
          <VscVerifiedFilled className='experience__details-icon'/>
          <div>
            <h4>FireBase</h4>
            <small className='text-light'>Estudando...</small>
          </div>
          </article>          
        </div>
        </div>
      </div>
     
        
     
    </section>
  )
}

export default Experience
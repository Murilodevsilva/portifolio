import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/bellapizzaria.png'
import IMG2 from '../../assets/projeto-website.png'
import IMG3 from '../../assets/projeto-coca.png'
import IMG4 from '../../assets/projeto-ladingpage.png'
import IMG5 from '../../assets/projeto-urna.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus trabalhos</h5>
      <h2>Portfólio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Projeto - Bellapizzaria</h3>
          <h5>Nele trabalhei com Javascript, HTML e CSS. Um projeto basico mais de muita qualidade!</h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/Murilodevsilva/BellaPizzaria" className='btn' target='_blank'>Github</a>
          <a href="https://murilodevsilva.github.io/BellaPizzaria" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div> </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Projeto - Web site</h3>
          <h5>Uma ladingpage para negócios, feita usando HTML e CSS</h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/Murilodevsilva/TemplateAwax" className='btn' target='_blank'>Github</a>
          <a href="https://murilodevsilva.github.io/TemplateAwax/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>  </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Projeto - Landing Coca</h3>
          <h5>Projeto inpirado na coca onde também trabalhei o design e a manipulação de objetos.</h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/Murilodevsilva/projetococa" className='btn' target='_blank'>Github</a>
          <a href="https://murilodevsilva.github.io/projetococa/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>  </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Projeto - Landing Starbucks</h3>
          <h5>Projeto com intuito de estudos, trabalhei com HTML e CSS.</h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/Murilodevsilva/TemplateStarbucks" className='btn' target='_blank'>Github</a>
          <a href="https://murilodevsilva.github.io/TemplateStarbucks/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div> </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Projeto - Urna eletronica</h3>
          <h5>Projeto desenvolvido usando HTML, CSS e Javascript.</h5>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/Murilodevsilva/urna" className='btn' target='_blank'>Github</a>
          <a href="https://murilodevsilva.github.io/urna/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div> 
        </article>
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react'
import './contact.css'
import {MdMarkEmailRead} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1tli62c', 'template_oanyi6n', form.current, 'cVPaua5Tp_giwG68H')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Precisando falar comigo ?</h5>
      <h2>Contate-me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdMarkEmailRead className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>murilodev.silva@gmail.com</h5>
            <a href="mailto:murilodev.silva@gmail.com" >Envie um email</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Murilo Silva</h5>
            <a href="http://m.me/murilo2ilva" target='_blank'>Envie uma mensagem</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 48 9 8468-7329</h5>
            <a href="https://wa.me/5548984687329?text=Murilo+Silva+Desenvolvedor+" target='_blank'>Envie uma mensagem</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Seu nome' required />
          <input type="email" name='email' placeholder='Seu email' required />
          <textarea name="message" rows="7" placeholder='Oque quer falar ?'></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensagem</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Relatos de clientes</h5>
      <h2>Testemunhos</h2>
      <Swiper className='container testimonial__container'
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src="" alt="" />
          </div>
          <h5 className='client__name'>Nome do fulano</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src="" alt="" />
          </div>
          <h5 className='client__name'>Nome do fulano</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src="" alt="" />
          </div>
          <h5 className='client__name'>Nome do fulano</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src="" alt="" />
          </div>
          <h5 className='client__name'>Nome do fulano</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials
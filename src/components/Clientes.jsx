import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

const logo_clients = require.context('../images/logos-clientes', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);

function Clientes() {
  return (
    <div className='client-logo-container'>
      <Swiper
      className='logos-list'
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={4}
      autoplay={true}
      >
        {
          logo_clients.keys().map((logo, i) => (
            <SwiperSlide key={`clientsLogo${i}`}>
              <img
                key={ `client${i}` }
                src={ logo_clients(logo) }
                alt={ `logo-cliente-${ i }` }
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Clientes;
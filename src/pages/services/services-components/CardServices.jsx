import React from 'react';

import { BsFillCaretRightFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CardServices({ album, title, description, cn, idN, servList }) {
  return (
    <div className={ cn } id={ idN }>
      <div className='img-serv-card'
      // style={{ background: `url(${ img })` }}
      >
        <Swiper
        className='img-services-swipe'
        modules={[Autoplay, Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        autoplay={true}
        >
          {
            album.keys().map((img, i) => (
              <SwiperSlide key={`serv-${title}-${i}`}>
                <img
                className='img-swipe'
                  key={ `client${i}` }
                  src={ album(img) }
                  alt={ `img-${title}-${ i }` }
                />
              </SwiperSlide>
            ))
          }
      </Swiper>
      </div>
      <div className='serv-txt-container'>
        <h2>{ title }</h2>
        <hr/>
        <div className='p-services'>
          { description }
          <ul>
            {
              servList.map((serv, i) => (
                serv ? (
                  <li key={`list-serv-${title}-${i}`}>{`- ${ serv }`}</li>
                ) : ''
              ))
            }
          </ul>
        </div>
        <div>
          <Button variant="outline-primary" size="sm"
            href='https://api.whatsapp.com/send?phone=351927082012&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento'
            target='blank'
          >
            Contrate Agora <BsArrowRight className='seta'/>
          </Button>{' '}
        </div>
      </div>
    </div>
  )
}

export default CardServices;
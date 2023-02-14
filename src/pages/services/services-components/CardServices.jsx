import React from 'react';

import Button from 'react-bootstrap/Button';
import { BsArrowRight } from "react-icons/bs";


function CardServices({ img, title, description, cn, idN }) {
  return (
    <div className={ cn } id={ idN }>
      <div className='img-serv-card'
      style={{ background: `url(${ img })` }}
      />
      <div className='serv-txt-container'>
        <h2>{ title }</h2>
        <hr/>
        <p>{ description }</p>
        <div>
          <Button variant="outline-primary" size="sm"
            href='https://api.whatsapp.com/send?phone=351927082012&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento'
            target='blank'
          >
            Contrate Agora <BsArrowRight/>
          </Button>{' '}
        </div>
      </div>
    </div>
  )
}

export default CardServices;
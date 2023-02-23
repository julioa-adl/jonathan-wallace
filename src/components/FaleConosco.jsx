import React from 'react';

import bg_fale_conosco from '../images/bg-fale-conosco.webp';
import Button from 'react-bootstrap/Button';
import { BsArrowRight } from "react-icons/bs";

function FaleConosco() {
  return (
    <div
      className='fale-conosco'
      style={{
        background: `url(${ bg_fale_conosco })`
      }}
    >
      <h1>Confie no melhor <strong>Parceiro</strong><br/>
      para <strong>Sua</strong> próxima <strong>Obra!</strong></h1>
      <Button
        className='btn-fale-conosco'
        variant="info"
        href='https://api.whatsapp.com/send?phone=351927082012&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento'
        target='blank'
      >Fale Conosco <BsArrowRight className='seta'/></Button>
    </div>
  )
}

export default FaleConosco;
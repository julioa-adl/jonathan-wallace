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
      >Fale Conosco <BsArrowRight/></Button>
    </div>
  )
}

export default FaleConosco;
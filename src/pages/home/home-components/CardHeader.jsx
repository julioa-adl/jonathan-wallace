import React from 'react';

import lampada from '../../../images/icons-card-header/lampada.webp';
import torneira from '../../../images/icons-card-header/torneira.webp';
import manutencao from '../../../images/icons-card-header/manutencao.webp';
import pintura from '../../../images/icons-card-header/pintura.webp';
import alpinism from '../../../images/icons-card-header/alpinism.webp';

function CardHeader() {
  return (
    <div className='card-header'>
      <div>
        <h1>
        O Melhor
        <br/>
        para a
        <br/>
        Sua Obra
        </h1>
      </div>
      <div className='card-icon lampada'><img alt='lampada'src={ lampada }/></div>
      <div className='card-icon torneira'><img alt='torneira' src={ torneira }/></div>
      <div className='card-icon manutencao'><img alt='manutencao' src={ manutencao }/></div>
      <div className='card-icon pintura'><img alt='pintura' src={ pintura }/></div>
      <div className='card-icon alpinism'><img alt='alpinism' src={ alpinism }/></div>
    </div>
  )
}

export default CardHeader
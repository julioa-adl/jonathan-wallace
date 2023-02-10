import React, { useState } from 'react';

import jonathan from '../../../images/jonathan.webp';

function AboutMe() {



  return (
    <div className='about-me'>
      <div className='img-aboutme'>
        <img alt='foto do Jonathan trabalhando' src={ jonathan }/>
      </div>
      <div className='txt-aboutme'>
        <h2>Jonathan Wallace</h2>
        <p>Nosso Diretor e Fundador, um empreendedor visionário, começou sua jornada no mercado de manutenção no Brasil, onde conquistou seu espaço com seu trabalho excepcional e dedicação. Com o tempo, surgiu a oportunidade de expandir sua empresa para Portugal, e hoje é reconhecido por sua proficiência e agilidade no setor.</p>
      </div>
    </div>
  )
}

export default AboutMe;
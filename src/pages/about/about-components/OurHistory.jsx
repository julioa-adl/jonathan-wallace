import React from 'react';

import van from '../../../images/van-jonathan.webp'

function OurHistory() {
  return (
    <div className='ourhistory'>
      <h2>Nossa História</h2>
      <hr/>
      <p>Possuímos soluções completas e experiência comprovada no mercado de manutenção geral, incluindo hidráulica, remodelação, elétrica e serviços em altura.</p>
      <div className='card-aboutUs'>
        <div className='img-van' style={{ background: `url(${ van })`}}/>
        <div className='txt-aboutUs-container'>
          <h1>Nós Somos Profissionais</h1>
          <hr/>
          <p className='txt-desktop'>
            A Jonathan Manutenção nasceu em Araraquara, São Paulo, no Brasil em 2012 com o objetivo de oferecer soluções completas em manutenção geral. Com anos de experiência e dedicação, a empresa se destacou no mercado brasileiro e teve a oportunidade de expandir suas atividades para Lisboa, Portugal. Hoje, a Jonathan Manutenção é reconhecida por seus serviços de alta qualidade, agilidade e proficiência, atendendo a diversas áreas, como hidráulica, elétrica, reformas, instalações e serviços em altura. Seu compromisso com a excelência é o que garante a satisfação de seus clientes.
          </p>

          <p className='txt-tablet'>
            A Jonathan Manutenção nasceu em Araraquara, São Paulo, no Brasil em 2012 com o objetivo de oferecer soluções completas em manutenção geral. Trabalhamos com alta qualidade, agilidade e proficiência, atendendo a diversas áreas, como hidráulica, elétrica, reformas, instalações e serviços em altura. Nosso compromisso é com a excelência e a satisfação de nossos clientes.
          </p>

          <p className='txt-mobile'>
            A Jonathan Manutenção nasceu em Araraquara, São Paulo, no Brasil em 2012 com o objetivo de oferecer soluções completas em manutenção geral. Nosso compromisso é com a excelência e a satisfação de nossos clientes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurHistory;
import React from 'react';

import { FaBullseye } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";

function Mission() {
  return (
    <div className='mission'>
      <div>
        <FaBullseye className='ico-mission'/>
        <h1>Missão</h1>
        <p>Fornecer soluções completas e de alta qualidade em manutenção geral, promovendo a satisfação de nossos clientes e contribuindo para a melhoria de seus ambientes.</p>
      </div>
      <div>
        <FaRegEye className='ico-mission'/>
        <h1>Visão</h1>
        <p>Ser referência no mercado de manutenção geral, expandindo nossos serviços e fortalecendo nossa presença em novas regiões.</p>
      </div>
      <div>
        <FaHandHoldingMedical className='ico-mission'/>
        <h1>Valores</h1>
        <p>Comprometimento com a excelência, Agilidade e eficiência, Respeito às normas de segurança e Transparência e honestidade.</p>
      </div>
    </div>
  )
}

export default Mission;
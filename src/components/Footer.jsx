import React from 'react';

import logo_branca from '../images/logo-branca.png';
import serviços from '../utils/object.services';

import { MdEmail } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='about-footer'>
          <h1>Sobre Nós</h1>
          <img alt='logo-jonathan-branca' src={ logo_branca }/>
          <p>Soluções completas em manutenção geral, incluindo hidráulica, remodelação, elétrica e serviços em altura.</p>
        </div>
        <div className='links-footer'>
          <h1>Nossos Serviços</h1>
          <ul>
            {
              serviços.map((serv) => (
                <li><span>{ `-${ serv.title }` }</span></li>
              ))
            }
          </ul>
        </div>
        <div className='contatos-footer'>
          <h1>Contactos</h1>
            <span><MdEmail className='ico-footer'/>- jonata.wallace@gmail.com</span>
            <span><MdPhoneIphone className='ico-footer'/>- +351 927 082 012</span>
            <span><MdLocationOn className='ico-footer'/>- Lisboa - Portugal</span>
        </div>
      </div>
      <div className='rodape'>
        <span>© 2023 JONATHAN WALLACE - Todos os direitos reservados - Desenvolvido por Júlio Adler</span>
      </div>
    </div>
  )
}

export default Footer;
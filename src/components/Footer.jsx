import React from 'react';
import { Link } from 'react-router-dom';

import logo_branca from '../images/logo-branca.png';
import serviços from '../utils/object.services';

import { MdEmail } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsDot } from "react-icons/bs";

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
                <li key={`servFooter${serv.title}`}>
                  <Link
                    className='link-f'
                    to={ `/servicos/${serv.pathName}` }
                  ><BsDot/>{ serv.title }</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='contatos-footer'>
          <h1>Contactos</h1>
          <span><MdEmail className='ico-footer'/>jonata.wallace@gmail.com</span>
          <span><MdPhoneIphone className='ico-footer'/>+351 927 082 012<i>*Chamada para a rede fixa nacional</i></span>
          <span><MdLocationOn className='ico-footer'/>Lisboa - Portugal</span>
        </div>
      </div>
      <div className='rodape'>
        <span>© 2023 JONATHAN WALLACE - Todos os direitos reservados - Desenvolvido por <a target="blank" href='https://www.linkedin.com/in/julio-a-f-mesquita/'>Júlio Adler</a></span>
      </div>
    </div>
  )
}

export default Footer;
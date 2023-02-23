import React from 'react';
import { Link } from 'react-router-dom';

import services from '../../../utils/object.services';

function ServicesHome() {
  return (
    <div className='services-home'>
      <h2>Nossos Serviços</h2>
      <p>Serviços Completos de Manutenção Geral</p>
      <div className='container-cards-serv-home'>
        {
          services.map((serv) => (
            <div key={`servhome${ serv.id }`}>
              <Link
                to={ `/servicos/${serv.pathName}` }
                className='link-serv-home'
              >
                <div className='capa-card-serv-home-container'>
                  <div
                    className='capa-card-serv-home'
                    style={{
                      background: `url(${ serv.cover })`
                    }}
                  />
                </div>
                <div className='infos-card-serv-home'>
                  <div className='div-icon-card-serv-home'>
                    <img className='icon-card-serv-home' alt={ `ico${ serv.title }` } src={ serv.icon }/>
                  </div>
                  <div className='txt-infos-card-home'>
                    <h1>{ serv.title }</h1>
                    <p>{ serv.resumo }</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ServicesHome;
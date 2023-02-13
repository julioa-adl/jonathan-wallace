import React, { useEffect } from 'react';

import Header from '../../components/Header';
import servicos from '../../utils/object.services';
import bgHeader from '../../images/bg-header-home.webp'
import TitleServices from './services-components/TitleServices';
import CardServices from './services-components/CardServices';
import FaleConosco from '../../components/FaleConosco';
import Footer from '../../components/Footer';


function Services({ match }) {
  const service = match.params.id;

  useEffect(() => {
    if (service) {
      const element = document.querySelector(`#${service}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  return (
    <div className='pages'>
      <Header
        bg={ bgHeader }
        altura={ 60 }
        title={ 'SERVIÇOS' }
        corTitle='c-b'
      />
      <TitleServices/>
      {
        servicos.map((s, i) => (
          <CardServices
            key={`servCardPage${ i }`}
            id={ s.pathName }
            cn={ i % 2 === 0 ? 'right-card' : 'left-card'}
            img={ s.cover }
            title={ s.title }
            description={ s.text }
          />
        ))
      }
      <br/>
      <br/>
      <FaleConosco/>
      <Footer/>
    </div>
  )
}

export default Services;
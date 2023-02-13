import React, { useEffect } from 'react';

import servicos from '../../utils/object.services';
import bgHeader from '../../images/bg-header-home.webp';
import vid_servs from '../../images/vid-servs.mp4';

import Header from '../../components/Header';
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
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });

  return (
    <div className='pages'>
      <Header
        bg={ bgHeader }
        altura={ 60 }
        video={ vid_servs }
        title={ 'SERVIÇOS' }
        corTitle='c-b'
      />
      <TitleServices/>
      {
        servicos.map((s, i) => (
          <CardServices
            key={`servCardPage${ i }`}
            idN={ s.pathName }
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
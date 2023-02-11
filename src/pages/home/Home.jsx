import React from 'react';
import Header from '../../components/Header';

import bgHeaderHome from '../../images/bg-header-home.webp'
import AboutMe from './home-components./AboutMe';
import CardHeader from './home-components./CardHeader';
import ServicesHome from './home-components./ServicesHome';

function Home() {
  return (
    <div className='home'>
      <Header
        bg={ bgHeaderHome }
        altura={ 100 }
        title={ 'MANUTENÇÃO' }
        subtitle={ 'Residencial e Comercial | Serviços de Urgência' }
      />
      <CardHeader/>
      <AboutMe/>
      <ServicesHome/>
    </div>
  )
}

export default Home
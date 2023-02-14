import React, { useEffect } from 'react';
import Clientes from '../../components/Clientes';
import Depoimentos from '../../components/Depoimentos';
import FaleConosco from '../../components/FaleConosco';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Whatsapp from '../../components/Whatsapp';

import bgHeaderHome from '../../images/bg-header-home.webp'
import AboutMe from './home-components/AboutMe';
import CardHeader from './home-components/CardHeader';
import ServicesHome from './home-components/ServicesHome';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='pages'>
      <Header
        bg={ bgHeaderHome }
        altura={ 90 }
        title={ 'MANUTENÇÃO' }
        subtitle={ 'Residencial e Comercial | Serviços de Urgência' }
        corTitle={ 'c-b' }
        corSubtitle={ 'c-b' }
      />
      <CardHeader/>
      <AboutMe/>
      <ServicesHome/>
      <section className='section-pages-bottom'>
        <FaleConosco/>
        <Depoimentos/>
        <Clientes/>
        <Whatsapp/>
        <Footer/>
      </section>
    </div>
  )
}

export default Home
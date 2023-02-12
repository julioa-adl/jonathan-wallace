import React from 'react';
import Clientes from '../../components/Clientes';
import FaleConosco from '../../components/FaleConosco';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import bgHeaderHome from '../../images/bg-header-home.webp'
import Conquistas from './about-components/Conquistas';
import OurHistory from './about-components/OurHistory';


function About() {
  return (
    <div className='pages'>
      <Header
        bg={ bgHeaderHome }
        altura={ 70 }
        title={ 'SOBRE NÓS' }
        corTitle='c-s'
      />
      <OurHistory/>
      <Conquistas/>
      <section className='section-pages-bottom'>
        <FaleConosco/>
        <Clientes/>
        <Footer/>
      </section>
    </div>
  )
}

export default About;
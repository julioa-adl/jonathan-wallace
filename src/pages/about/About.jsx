import React, { useEffect } from 'react';

import bgHeader from '../../images/bg-header-home.webp';
import vid_jon from '../../images/vid-jonata-yel.mp4'

import Clientes from '../../components/Clientes';
import FaleConosco from '../../components/FaleConosco';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Conquistas from './about-components/Conquistas';
import OurHistory from './about-components/OurHistory';
import Mission from '../../components/Mission';
import Whatsapp from '../../components/Whatsapp';


function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='pages'>
      <Header
        // bg={ bgHeader }
        video={ vid_jon }
        altura={ 60 }
        title={ 'SOBRE NÓS' }
        corTitle='c-b'
      />
      <OurHistory/>
      <Conquistas/>
      <Mission/>
      <section className='section-pages-bottom'>
        <FaleConosco/>
        <Clientes/>
        <Whatsapp/>
        <Footer/>
      </section>
    </div>
  )
}

export default About;
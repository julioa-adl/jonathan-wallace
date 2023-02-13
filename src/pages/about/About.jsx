import React, { useEffect } from 'react';
import Clientes from '../../components/Clientes';
import FaleConosco from '../../components/FaleConosco';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import bgAbout from '../../images/bg-about.webp'
import bgAnime from '../../images/animated-bg.mp4'
import Conquistas from './about-components/Conquistas';
import OurHistory from './about-components/OurHistory';


function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='pages'>
      <Header
        bg={ bgAbout }
        video={ bgAnime }
        altura={ 60 }
        title={ 'SOBRE NÓS' }
        corTitle='c-b'
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
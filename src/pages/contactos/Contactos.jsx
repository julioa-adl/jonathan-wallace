import React from 'react';

import Header from '../../components/Header';

import vid_lisboa from '../../images/vid-lisboa.mp4';
import FormContacto from './contactos.components/FormContacto';
import InfoContactos from './contactos.components/InfoContactos';
import FaleConosco from '../../components/FaleConosco';
import Footer from '../../components/Footer';

function Contactos() {
  return (
    <div className='pages'>
      <Header
        altura={ 60 }
        video={ vid_lisboa }
        title={ 'CONTACTOS' }
        corTitle='c-b'
      />
      <section className='contactos'>
        <InfoContactos/>
        <FormContacto/>
      </section>
      <FaleConosco/>
      <Footer/>
    </div>
  )
}

export default Contactos;
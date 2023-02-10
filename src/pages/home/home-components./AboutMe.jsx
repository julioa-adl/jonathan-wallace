import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { BsArrowRight } from "react-icons/bs";

import useWindowSize from '../../../hooks/useWindowSize';
import useWindowScroll from '../../../hooks/useWindowScroll';

import jonathan from '../../../images/jonathan.webp';

function AboutMe() {
  const [renderView, setRenderView] = useState(false);

  const ref = useRef(null);

  const size = useWindowSize();
  const position = useWindowScroll();

  useEffect(() => {
    const altura = ref.current.getBoundingClientRect().top;
    if (altura < size.height * 0.75) {
      setRenderView(true);
    }  
  }, [position, size]);

  return (
    <div className='about-me' ref={ ref }>
      {
        renderView ? (
          <>
            <div className='img-aboutme'>
              <img alt='foto do Jonathan trabalhando' src={ jonathan }/>
              <div className='quadradinho q-vermelho'/>
              <div className='quadradinho q-azul'/>
              <div className='quadradinho q-amarelo'/>
            </div>
            <div className='txt-aboutme'>
              <h2>Jonathan Wallace</h2>
              <p>Nosso Diretor e Fundador, um empreendedor visionário, começou sua jornada no mercado de manutenção no Brasil, onde conquistou seu espaço com seu trabalho excepcional e dedicação. Com o tempo, surgiu a oportunidade de expandir sua empresa para Portugal, e hoje é reconhecido por sua proficiência e agilidade no setor.</p>
              <Button className='btn-saber-mais' variant="info">Saber mais <BsArrowRight/></Button>
            </div>
          </>
        ) : <p></p>
      }
      
    </div>
  )
}

export default AboutMe;
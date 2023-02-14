import React, { useState, useEffect, useRef } from 'react';

import useWindowSize from '../../../hooks/useWindowSize';
import useWindowScroll from '../../../hooks/useWindowScroll';

import bg_conquistas from '../../../images/bg-conquistas.webp';

function Conquistas() {
  const idade = new Date().getFullYear() - 2012;
  const obras = 800;
  const acidentes = 0;
  const clientes = 600;

  const [rIdade, setIdade] = useState(0);
  const [rObras, setObras] = useState(0);
  const [rAcidentes, setAcidentes] = useState(0);
  const [rClientes, setClientes] = useState(0);
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

  const timing = 3000;

  const timingFunction = (time, valorFinal, setNum) => {
    let contagem = 0;
    const intervalId = setInterval(() => {
      setNum(contagem);
      contagem += 1;
      if (contagem > valorFinal) {
        clearInterval(intervalId);
      }
    }, time / valorFinal);
  };

  useEffect(() => {
    if (renderView) {
      timingFunction(timing, idade, setIdade);
      timingFunction(timing, obras, setObras);
      timingFunction(timing, acidentes, setAcidentes);
      timingFunction(timing, clientes, setClientes);
    }
  }, [renderView]);

  return (
    <div
      style={{ background: `url(${ bg_conquistas })` }}
      className='conquistas'>
      <div ref={ ref }>
        <h1>{`${rIdade}`}</h1>
        <p>Anos de<br/>Experiência</p>
      </div>
      <div>
        <h1>{`+${rObras}`}</h1>
        <p>Serviços<br/>Concluídos</p>
      </div>
      <div>
        <h1>{`${rAcidentes}`}</h1>
        <p>Zero<br/>Acidentes</p>
      </div>
      <div>
        <h1>{`+${rClientes}`}</h1>
        <p>Clientes<br/>Satisfeitos</p>
      </div>
    </div>
  )
}

export default Conquistas;
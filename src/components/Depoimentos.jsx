import React, { useState, useEffect } from 'react';

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";

import depoiments from '../utils/object.depoiments';

function Depoimentos() {
  const [useId, setDepoimentId] = useState(0);
  const dep = depoiments[useId];
  const timing = 10000;

  useEffect(() => {
    const interval = setInterval(_ => {
      if (useId === depoiments.length - 1) {
        setDepoimentId(0);
      } else {
        setDepoimentId((prev) => prev + 1);
      }
    }, timing);
    return _ => clearInterval(interval);
  });

  const nextDep = () => {
    if (useId === depoiments.length - 1) {
      setDepoimentId(0);
      return;
    } else {
      setDepoimentId((prev) => prev + 1);
      return;
    }
  }

  const prevDep = () => {
    if (useId === 0) {
      setDepoimentId(depoiments.length - 1);
      return;
    } else {
      setDepoimentId((prev) => prev - 1);
      return;
    }
  }

  return (
    <div className='depoimentos'>
      <div className='carousel'
        style={{
          background: `url(${ dep.img })`,
        }}
      >
        <div className='div-nextIcon'>
          <BsFillArrowLeftCircleFill
            onClick={ prevDep }
            className='nextIcon'/>
        </div>
        <div className='txt-container'>
          <h2>Depoimentos</h2>
          <FaQuoteLeft className='aspas'/>
          <p>{ dep.depoiment }</p>
          <div className='client-container'>
            <h2>{ dep.cliente }</h2>
            <hr/>
            <h3>{ dep.title }</h3>
          </div>
        </div>
        <div className='div-nextIcon'>
          <BsFillArrowRightCircleFill
            onClick={ nextDep }
            className='nextIcon'/>
        </div>
      </div>
    </div>
  )
}

export default Depoimentos;
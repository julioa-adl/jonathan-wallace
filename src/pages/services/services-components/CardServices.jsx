import React from 'react';

function CardServices({ img, title, description, cn, idN }) {
  return (
    <div className={ cn } id={ idN }>
      <div className='img-serv-card'
      style={{ background: `url(${ img })` }}
      />
      <div className='serv-txt-container'>
        <h2>{ title }</h2>
        <hr/>
        <p>{ description }</p>
      </div>
    </div>
  )
}

export default CardServices;
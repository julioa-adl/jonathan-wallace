import React from 'react';
import NavBar from './NavBar';
import TopBar from './TopBar'

function Header({ bg, altura, title, subtitle, corTitle, corSubtitle, video }) {
  return (
    <header
      className='header'
      style={{
        background: `url(${ bg })`,
        height: `${ altura }vh`,
      }}
    >
    { video ? (
      <div className='video'>
        <video
        src={ video }
        muted
        playsInline
        autoPlay
        loop 
        />
      </div>
    ) : null
    }
      <TopBar/>
      <NavBar/>
      <div className='txt-container-header'>
        <h1 className={`header-title ${corTitle}`}>{ title }</h1>
        <p className={`header-subtitle ${corSubtitle}`}>{ subtitle }</p>
      </div>
    </header>
  )
}

export default Header;
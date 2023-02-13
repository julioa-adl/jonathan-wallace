import React from 'react';
import NavBar from './NavBar';
import TopBar from './TopBar'

function Header({ bg, altura, title, subtitle, corTitle, corSubtitle }) {
  return (
    <header
      className='header'
      style={{
        background: `url(${ bg })`,
        height: `${ altura }vh`,
        // minHeight: `${ altura }vh !important`,
      }}
    >
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
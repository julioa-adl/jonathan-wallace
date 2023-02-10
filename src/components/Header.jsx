import React from 'react';
import NavBar from './NavBar';
import TopBar from './TopBar'

function Header({ bg, altura, title, subtitle }) {
  return (
    <header
      className='header'
      style={{
        background: `url(${ bg })`,
        height: `${ altura }vh`,
      }}
    >
      <TopBar/>
      <NavBar/>
      <div className='txt-container-header'>
        <h1 className='header-title'>{ title }</h1>
        <p className='header-subtitle'>{ subtitle }</p>
      </div>
    </header>
  )
}

export default Header;
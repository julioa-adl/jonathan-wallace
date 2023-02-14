import React from 'react';

import { IoLogoWhatsapp } from "react-icons/io";

function Whatsapp() {
  return (
    <a
      className='whatsapp'
      target="blank"
      href="https://api.whatsapp.com/send?phone=351927082012&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento">
      <IoLogoWhatsapp className='wpp_icon'/>
    </a>
  )
}

export default Whatsapp;

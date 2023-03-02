import React from 'react';

import { MdEmail } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

function InfoContactos() {
  return (
    <div className='infoscontactos'>
      <h2>Informações de Contacto</h2>
      <span><MdEmail className='ico-contactos'/>- jonata.wallace@gmail.com</span>
      <span className='tel-contacto'><MdPhoneIphone className='ico-contactos'/>- +351 927 082 012</span>
      <span><MdLocationOn className='ico-contactos'/>- Lisboa - Portugal</span>
    </div>
  )
}

export default InfoContactos;
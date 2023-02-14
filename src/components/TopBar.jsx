import React from 'react';

import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

function TopBar() {
  return (
    <div className='my-topBar'>
      <div className='telefone'>
        <BsTelephone className='icon-top phone'/>
        <p>+351 927 082 012</p>
      </div>
      <div>
        <BsEnvelope className='icon-top envelop'/>
        <p>jonata.wallace@gmail.com</p>
      </div>
    </div>
  )
}

export default TopBar
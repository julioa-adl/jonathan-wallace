import React, { useState, useEffect } from 'react';

import emailjs from '@emailjs/browser';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormContacto() {
  const [isDisabled, setDisable] = useState(true);
  const [formInputs, setform] = useState({
    name: '',
    email: '',
    contato: '',
    detalhes: '',
  });

  useEffect(() => {
    const emailRegex = /\S+@\S+\.\S+/;

    const {name, email, contato, detalhes } = formInputs;
    if (!name || !email || !contato || !detalhes
      || !emailRegex.test(email)
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [formInputs]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setform((prevstate) => ({
      ...prevstate,
      [id]: value,
    }));
  }

  const bttnSubmit = (e) => {
    e.preventDefault();
    const {name, email, contato, detalhes } = formInputs;
    const objParams = {
      from_name: name,
      email,
      contato,
      message: detalhes,
    }
    emailjs.send('service_b0g095g', 'template_19yz466', objParams, '0X2dmmRd891eeM98J')
    .then((response) => {
      setform({
        name: '',
        email: '',
        contato: '',
        detalhes: '',
      });
      alert('mensagem enviada')
    }, (err) => {
      console.log('erro no envio' + err)
    })
  }

  return (
    <div className='formcontacto'>
      <h2>Solicitar um Orçamento</h2>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

        <Form.Control
          type="text"
          placeholder="*Nome"
          onChange={ handleChange }
          id="name"
          value={formInputs.name}
          required
        />
        <br />
        <Form.Control
          onChange={ handleChange }
          id="email"
          type="email"
          placeholder="*Email"
          value={formInputs.email}
          required
        />
        <br />
        <Form.Control
          type="text"
          placeholder="*Telemóvel"
          onChange={ handleChange }
          id="contato"
          value={formInputs.contato}
          required
        />
        <br />
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="*Assunto"
          onChange={ handleChange }
          id="detalhes"
          value={formInputs.detalhes}
        />

      </Form.Group>
      <br />
      <Button
        variant="success"
        onClick={ bttnSubmit }
        type="submit"
        disabled={ isDisabled }>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default FormContacto;
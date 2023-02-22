import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useWindowSize from '../hooks/useWindowSize';
import useWindowScroll from '../hooks/useWindowScroll';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logo from '../images/logo.png';

import servicos from '../utils/object.services';

function NavBar() {
  const [positionNav, setPositionNav] = useState('');

  const size = useWindowSize();
  const position = useWindowScroll();

  useEffect(() => {
    if (position > size.height * 0.75) {
      setPositionNav('top');
    } else {
      setPositionNav('');
    }
  }, [position, size]);

  return (
    <Navbar
      fixed={ positionNav }
      key={'lg'}
      bg="light"
      expand={'lg'}
      className="mb-3 mt-3 navbar"
    >
      <Container fluid>
        <Nav className="justify-content-start flex-grow-1">
          <Navbar.Brand as={ Link } to={ '/' }>
            <img
              src={ logo }
              width="150"
              className="d-inline-block align-top"
              alt="Jonathas logo"
            />
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${'lg'}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
            <img
              src={ logo }
              width="200"
              className="d-inline-block align-top"
              alt="Jonathas logo"
            />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="nav-itens justify-content-start flex-grow-3">
              <Nav.Link className='item' as={ Link } to={ '/' }>Home</Nav.Link>
              <Nav.Link className='item' as={ Link } to={ '/sobre' }>Sobre-nós</Nav.Link>
              <NavDropdown
                className='item'
                title="Serviços"
                id={`offcanvasNavbarDropdown-expand-${'lg'}`}
              >
                <NavDropdown.Item
                as={ Link } to={ '/servicos' }
                >
                  Todos os Serviços
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {
                  servicos.map((serv) => (
                  <NavDropdown.Item
                    as={ Link } to={ `/servicos/${serv.pathName}` } key={`navserv${serv.title}`}>
                      { serv.title }
                  </NavDropdown.Item>
                  ))
                }
              </NavDropdown>
            </Nav>
            <Nav className="justify-content-end flex-grow-1">
              <Button variant="success" 
              as={ Link } to={ '/contactos' }
              className='btn-contacte-nos'>Contacte-nos</Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
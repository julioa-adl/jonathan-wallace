import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logo from '../images/logo.png'

function NavBar() {
  return (
    <Navbar key={'lg'} bg="light" expand={'lg'} className="mb-3 mt-3 navbar">
      <Container fluid>
        <Nav className="justify-content-start flex-grow-1">
          <Navbar.Brand href="#">
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
              <Nav.Link className='item' href="#action2">Sobre-nós</Nav.Link>
              <NavDropdown
                className='item'
                title="Serviços"
                id={`offcanvasNavbarDropdown-expand-${'lg'}`}
              >
                <NavDropdown.Item
                  href="#action3">
                  Manutenção
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action3">
                  Remodelação
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action3">
                  Elétrica
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action3">
                  Hidráulica
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action3">
                  Serviços em Altura
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="justify-content-end flex-grow-1">
              <Button variant="success" className='btn-contacte-nos'>Contacte-nos</Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
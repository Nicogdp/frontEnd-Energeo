import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginModal from '../components/LoginModal'; // ya lo tenés
import RegistroModal from '../components/RegistroModal'; // lo que creamos recién

export const AppNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">ENERGEO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link onClick={() => setShowLogin(true)}>Login</Nav.Link>
              <Nav.Link onClick={() => setShowRegistro(true)}>Registro</Nav.Link>
              <Nav.Link as={Link} to="/sobre-nosotros">Sobre Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/carrito">Carrito 🛒</Nav.Link>
              <Nav.Link as={Link} to="/administracion">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal de Login */}
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
      
      {/* Modal de Registro */}
      <RegistroModal show={showRegistro} handleClose={() => setShowRegistro(false)} />
    </>
  );
};

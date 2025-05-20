import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const AppNavbar = () => {
  return (
    <Navbar  bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">ENERGEO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
            <Nav.Link as={Link} to="/sobre-nosotros">Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/carrito">Carrito 🛒</Nav.Link>
            <Nav.Link as={Link} to="/administracion">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

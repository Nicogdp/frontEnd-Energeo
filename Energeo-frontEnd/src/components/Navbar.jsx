import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import RegistroModal from '../components/RegistroModal';
import '../style/navbar.css'
import logo from '../image/logo2.jpg'

export const AppNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);
  const [rol, setRol] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRol = localStorage.getItem('rol');
    setIsAuth(!!token);
    setRol(userRol);
  }, [showLogin, showRegistro]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('isAuth');
    setIsAuth(false);
    setRol(null);
    navigate('/home');
  };

  return (
    <>
      <Navbar className='custom-navbar' variant="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
          <h1>Energeo</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/cursos">Cursos</Nav.Link>
              <Nav.Link as={Link} to="/sobrenosotros">Sobre Nosotros</Nav.Link>

              {/* Mostrar Admin solo si es admin */}
              {rol === 'admin' && (
                <Nav.Link as={Link} to="/administracion">Admin</Nav.Link>
              )}

              {/* Mostrar Login/Registro solo si NO está autenticado */}
              {!isAuth && (
                <>
                  <Nav.Link onClick={() => setShowLogin(true)}>Login</Nav.Link>
                  <Nav.Link onClick={() => setShowRegistro(true)}>Registro</Nav.Link>
                </>
              )}

              {/* Mostrar Cerrar Sesión si está autenticado */}
              {isAuth && (
                <Nav.Link onClick={handleLogout}>Cerrar sesión</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
      <RegistroModal show={showRegistro} handleClose={() => setShowRegistro(false)} />
    </>
  );
};

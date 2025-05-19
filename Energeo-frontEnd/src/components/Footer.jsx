import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Si quieres usar iconos, instala react-icons:
// npm install react-icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#222', color: '#eee', padding: '2rem 0' }}>
      <Container>
        <Row>
          {/* Columna 1: Nombre de la empresa */}
          <Col md={4}>
            <h2>ENERGEO</h2>
          </Col>

          {/* Columna 2: Servicios */}
          <Col md={4}>
            <h5>Servicios</h5>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li>Curso</li>
              <li>Maquinaria</li>
              <li>Capacitacion</li>
            </ul>
          </Col>

          {/* Columna 3: Redes Sociales */}
          <Col md={4}>
            <h5>Síguenos</h5>
            <div style={{ fontSize: '1.5rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#eee', marginRight: '1rem' }}>
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#eee', marginRight: '1rem' }}>
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#eee', marginRight: '1rem' }}>
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#eee' }}>
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

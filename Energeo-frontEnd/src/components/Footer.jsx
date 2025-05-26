import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f5f5f5', color: '#333', padding: '2rem 0', borderTop: '1px solid #ddd' }}>
      <Container>
        <Row className="text-center text-md-start">
          
          <Col md={4} className="mb-4 mb-md-0">
            <h3 style={{ fontWeight: 'bold' }}>ENERGEO</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              Industria textil & capacitación técnica.
            </p>
          </Col>

          
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">Accesos</h5>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li>
                <Link to="/shop" style={{ textDecoration: 'none', color: '#333' }}>
                  E-shop
                </Link>
              </li>
              <li>
                <Link to="/cursos" style={{ textDecoration: 'none', color: '#333' }}>
                  Cursos
                </Link>
              </li>
            </ul>
          </Col>

          {/* Columna 3: Redes sociales */}
          <Col md={4}>
            <h5 className="mb-3">Seguinos</h5>
            <div style={{ fontSize: '1.5rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#333', marginRight: '1rem' }}>
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#333', marginRight: '1rem' }}>
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#333', marginRight: '1rem' }}>
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

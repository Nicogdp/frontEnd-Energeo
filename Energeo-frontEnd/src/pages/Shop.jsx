import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bannerImg from '../image/maquinacocer6.jpg'; // <-- Reemplaza con tu imagen real
import img1 from '../image/maquinacocer3.jpg';
import img2 from '../image/maquinacocer5.jpg';
import img3 from '../image/maquinacocer4.jpg';
import img4 from '../image/maquinacocer7.jpg';
import img5 from '../image/maquinacocer8.jpg';

export const Shop = () => {
  return (
    <div>
      {/* Imagen con texto centrado */}
      <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
        <img
          src={bannerImg}
          alt="Banner"
          style={{
            width: '100%',
            height: '60vh',
            objectFit: 'cover',
            display: 'block',
            filter: 'brightness(0.6)',
          }}
        />
        <h1
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '3rem',
            textAlign: 'center',
          }}
        >
          Tienda Online
        </h1>
      </div>

      <Container className="my-5">
        {/* Dos columnas, dos filas alternadas */}
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <img src={img1} alt="Imagen 1" style={{ width: '100%', borderRadius: '8px' }} />
          </Col>
          <Col md={6}>
            <h2>Maquina de cocer flora turquesa</h2>
            <h5>Precio:$260.000</h5>
          </Col>
        </Row>

        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <h2>Maquina de cocer mecanica</h2>
            <h5>Precio:$340.000</h5>
          </Col>
          <Col md={6}>
            <img src={img2} alt="Imagen 2" style={{ width: '100%', borderRadius: '8px' }} />
          </Col>
        </Row>

        {/* Una imagen mediana y dos imágenes pequeñas al lado */}
        <Row className="mb-5">
          <Col md={6}>
            <img src={img3} alt="Mediana" style={{ width: '100%', borderRadius: '8px' }} />
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={6}>
                <img src={img4} alt="Pequeña 1" style={{ width: '100%', borderRadius: '8px' }} />
              </Col>
              <Col xs={6}>
                <img src={img5} alt="Pequeña 2" style={{ width: '100%', borderRadius: '8px' }} />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* 2 columnas con 2 filas de puntos */}
        <Row className="mb-5">
          <Col md={6}>
            <ul>
                <h4></h4>
              <li>Punto destacado 1</li>
              <li>Punto importante 2</li>
            </ul>
            <ul>
              <li>Punto útil 3</li>
              <li>Punto clave 4</li>
            </ul>
          </Col>
          <Col md={6}>
            <ul>
              <li>Beneficio adicional 1</li>
              <li>Ventaja competitiva 2</li>
            </ul>
            <ul>
              <li>Garantía o soporte</li>
              <li>Llamado a la acción</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

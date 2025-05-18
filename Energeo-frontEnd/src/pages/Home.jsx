import React from 'react';
import curso1 from '../image/curso1.webp';
import curso2 from '../image/curso2.webp';
import curso3 from '../image/curso3.webp';
import curso4 from '../image/curso4.webp';
import maquina1 from '../image/maquinacocer6.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';

const primaryColor = '#222222'; // color oscuro para títulos
const textColor = '#000000'; // negro para textos en negrita

export const Home = () => {
  return (
    <>
      {/* Primera imagen a ancho completo con altura fija y recortada */}
     <div
  style={{
    width: '100vw',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    overflow: 'hidden',
  }}
>
  <img
    src={curso1}
    alt="Banner"
    style={{
      width: '100%',
      height: '60vh', // altura deseada en proporción a la pantalla
      objectFit: 'contain', // se ve completa sin recortes
      display: 'block',
      margin: '0 auto'
    }}
  />
</div>

      <Container className="mt-4">
        {/* Texto de 3 renglones con color y estilo */}
        <div className="my-4" style={{ color: textColor, fontWeight: '700', fontSize: '1.1rem' }}>
          <p>¿Quienes somos?

En Energeo, nos especializamos en brindar capacitación de alta calidad para la industria textil. Nuestro objetivo es impulsar el desarrollo profesional de quienes forman parte de este sector,</p>
          <p> ofreciendo cursos actualizados, prácticos y enfocados en las necesidades reales del mercado..</p>
          
        </div>

        {/* Botón negro con texto blanco */}
        <div className="mb-5">
          <Button
            href="/cursos"
            style={{
              backgroundColor: '#000000',
              borderColor: '#000000',
              color: '#ffffff',
              fontWeight: '700',
            }}
          >
            Ir a cursos
          </Button>
        </div>

        {/* 3 columnas con imagen + texto */}
        <Row>
          {[curso2, curso3, curso4].map((imgSrc, idx) => (
            <Col md={4} key={idx} className="text-center mb-4">
              <img
                src={imgSrc}
                alt={`Curso ${idx + 1}`}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                }}
              />
              <small
                className="d-block mt-2"
                style={{ color: primaryColor, fontWeight: '700' }}
              >
             
              </small>
              <div className="my-5">
  <h2 className="fw-bold text-dark">Capacitación Textil en Máquinas Industriales</h2>
  <p className="mt-3">
    Nuestro programa de formación está diseñado para brindarte conocimientos prácticos 
  </p>
  <p>
    Ya seas principiante o cuentes con experiencia previa, nuestra capacitación se adapta a tus necesidades, con instructores calificados y espacios equipados. Impulsamos tu desarrollo profesional en la industria textil para que logres resultados de calidad, eficiencia y seguridad en el trabajo.
  </p>
</div>

            </Col>
          ))}
        </Row>

        {/* Texto a la izquierda, imagen a la derecha */}
        <Row className="align-items-center my-5">
          <Col md={6} style={{ color: textColor, fontWeight: '700', fontSize: '1rem' }}>
            <p>En Energeo, ofrecemos una amplia gama de máquinas textiles para cada etapa del proceso productivo: 
               </p>
            <p> desde el hilado y tejido, hasta el corte y la confección.</p>
            <p> . Trabajamos 
                con marcas líderes del mercado</p>
            <p>, garantizando equipos de alta durabilidad, 
                precisión y eficiencia..</p>
            
            <Button
              href="/comprar"
              className="mt-3"
              style={{
                backgroundColor: '#000000',
                borderColor: '#000000',
                color: '#ffffff',
                fontWeight: '700',
              }}
            >
              Ir a comprar
            </Button>
          </Col>
          <Col md={6}>
            <img
              src={maquina1}
              alt="Imagen a la derecha"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import '../style/home.css';
import img1 from '../image/bannerHome2.jpeg';
import img2 from '../image/bannerHome3.jpg';
import img3 from '../image/bannerHome.jpeg';
import img4 from '../image/bannerEnergeo6.jpg';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate('/shop');
  };

  return (
   <div>
     <div className="home-page">
      <section className="hero-carousel">
        <Carousel controls={true} indicators={true} fade interval={5000}>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={img1} alt="Slide 1" />
            <Carousel.Caption>
              <h1>Inscribite en nuestros cursos</h1>
              <p>Capacitate en nuestros cursos modalidad presencial y virtual!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={img4} alt="Slide 2" />
            <Carousel.Caption>
              <h1>Aprendé con expertos</h1>
              <p>Clases prácticas y contenidos actualizados.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={img3} alt="Slide 3" />
            <Carousel.Caption>
              <h1>Tambien contamos con un e-shop</h1>
              <p>Maquinas de la mejor calidad a precios accesibles!.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
     
      <div className="home-section">
        <Container>
          <Row className="align-items-center mt-5 mb-5">
            <Col md={6}>
              <img src={img2} alt="Descripción"className="img-fade-right" />
            </Col>
            <Col md={6}>
              <h3>Nuestra Misión</h3>
              <p>
                Enseñar, empoderar y transformar a través de herramientas tecnológicas accesibles.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Sección con texto, imagen y botón */}
      <div className="home-section-cta">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h3>¿Listo para explorar?</h3>
              <p>
                Visitá nuestra tienda y descubrí productos que complementan tu aprendizaje.
              </p>
              <Button variant="primary" onClick={handleShopClick}>
                Ir a la tienda
              </Button>
            </Col>
            <Col md={6}>
              <img src={img3} alt="Tienda" className="img-fade-right" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

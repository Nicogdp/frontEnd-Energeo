import React, { useEffect } from 'react';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../style/home.css';
import img1 from '../image/bannerHome2.jpeg';
import img2 from '../image/bannerHome3.jpg';
import img3 from '../image/bannerHome.jpeg';
import img4 from '../image/bannerEnergeo6.jpg';
import img5 from '../image/bannerEnergeo7.jpg';
import mision from '../image/mision.jpg'
import vision from '../image/vision.jpg'

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Carrusel principal */}
      <section className="hero-carousel">
        <Carousel controls indicators fade interval={5000}>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={img1} alt="Slide 1" />
            <Carousel.Caption>
              <h1>Inscribite en nuestros cursos</h1>
              <p>Capacitate en nuestros cursos modalidad presencial y virtual</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={img4} alt="Slide 2" />
            <Carousel.Caption>
              <h1>Aprendé con expertos</h1>
              <p>Clases prácticas y contenidos actualizados</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={img3} alt="Slide 3" />
            <Carousel.Caption>
              <h1>También contamos con un e-shop</h1>
              <p>Máquinas de la mejor calidad a precios accesibles</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Sección Misión */}
      <Container className="py-5">
        <Row className="align-items-center" data-aos="fade-right">
          <Col md={6}>
            <img src={mision} alt="Misión" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6}>
            <h3 className="mb-4">Nuestra Misión</h3>
            <p className="mb-3">
              Atender la demanda de confección textil, especialmente uniformes y ropa de trabajo.
            </p>
            <p className="mb-3">
              Capacitar con cursos prácticos en moldería y armado de prendas.
            </p>
            <p>
              Proveer maquinaria textil con instalación y formación técnica básica incluida.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Sección Visión */}
      <Container className="py-5 bg-light">
        <Row className="align-items-center" data-aos="fade-left">
          <Col md={6}>
            <h3 className="mb-4">Nuestra Visión</h3>
            <p className="mb-3">
              Crear una escuela terciaria textil para formar profesionales con alto nivel técnico.
            </p>
            <p className="mb-3">
              Brindar herramientas que optimicen el trabajo y aseguren calidad y homogeneidad en cada prenda.
            </p>
          </Col>
          <Col md={6}>
            <img src={vision} alt="Visión" className="img-fluid rounded shadow" />
          </Col>
        </Row>
      </Container>

      <h1 className='text-center'>Nuestros servicio</h1>
      <hr />
      <Container className="py-5" data-aos="fade-up">
        <Row>
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-lg">
              <Card.Img variant="top" src={img5} />
              <Card.Body>
                <Card.Title>Ir a la tienda</Card.Title>
                <Card.Text>
                  Descubrí nuestras máquinas e insumos ideales para tu emprendimiento.
                </Card.Text>
                <Button variant="outline-dark" onClick={() => navigate('/shop')}>Visitar tienda</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-lg">
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Ver cursos disponibles</Card.Title>
                <Card.Text>
                  Formate con nosotros y aprendé técnicas industriales textiles con profesionales.
                </Card.Text>
                <Button variant="outline-dark" onClick={() => navigate('/cursos')}>Ver cursos</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

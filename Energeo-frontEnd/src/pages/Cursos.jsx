import React, { useState } from 'react';
import { Carousel, Button, Modal, Form, Container } from 'react-bootstrap';
import '../style/cursos.css';
import curso1 from '../image/bannerCurso.jpg';
import curso2 from '../image/bannerCurso2.jpg';
import curso3 from '../image/bannerCurso3.jpg';
import Swal from 'sweetalert2';
import testApi from '../Api/testApi';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Cursos = () => {
  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const resp = await testApi.post('/api/preinscripcion', {
      nombre,
      apellido,
      email,
      mensaje
    });

    const data = resp.data; 

     Swal.fire({
  title: 'Enviado correctamente',
  text: 'Gracias por tu interés. Pronto nos pondremos en contacto.',
  icon: 'success',
  showConfirmButton: false,
  timer: 2000
});
    handleClose(); // ✅ Cierra el modal
    setNombre('');
    setApellido('');
    setEmail('');
    setMensaje('');

    console.log('Respuesta del servidor:', data);
    // Mostrar mensaje, limpiar campos, etc.

  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    Swal.fire('Error', 'No se pudo enviar el formulario', 'error');
  }
};
  useEffect(() => {
   AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="cursos-page">
      <Container className="mt-4 mb-5">
        <div className="cursos-carousel-wrapper" data-aos="fade-down">
  <Carousel className="cursos-carousel">
    <Carousel.Item>
      <img className="d-block w-100" src={curso1} alt="Curso 1" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={curso2} alt="Curso 2" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={curso3} alt="Curso 3" />
    </Carousel.Item>
  </Carousel>
  <div className="btn-preinscribirse-container" data-aos="zoom-in" data-aos-delay="300">
    <Button variant="dark" onClick={handleOpen}>Preinscribirse</Button>
  </div>
</div>

      </Container>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Preinscripción</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="custom-form">
  <Form.Group className="mb-3 input-with-icon">
    <Form.Label><FaUser className="icon" /> Nombre</Form.Label>
    <Form.Control
      type="text"
      placeholder="Tu nombre"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      required
      className="shadow-sm rounded"
    />
  </Form.Group>

  <Form.Group className="mb-3 input-with-icon">
    <Form.Label><FaUser className="icon" /> Apellido</Form.Label>
    <Form.Control
      type="text"
      placeholder="Tu apellido"
      value={apellido}
      onChange={(e) => setApellido(e.target.value)}
      required
      className="shadow-sm rounded"
    />
  </Form.Group>

  <Form.Group className="mb-3 input-with-icon">
    <Form.Label><FaEnvelope className="icon" /> Email</Form.Label>
    <Form.Control
      type="email"
      placeholder="Tu correo"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="shadow-sm rounded"
    />
  </Form.Group>

  <Form.Group className="mb-3 input-with-icon">
    <Form.Label><FaCommentDots className="icon" /> Mensaje</Form.Label>
    <Form.Control
      as="textarea"
      rows={3}
      placeholder="Contanos por qué te interesa..."
      value={mensaje}
      onChange={(e) => setMensaje(e.target.value)}
      required
      className="shadow-sm rounded"
    />
  </Form.Group>

  <Button variant="success" type="submit" className="w-100">
    Enviar
  </Button>
</Form>
        </Modal.Body>
      </Modal>

      <section className="info-section container mb-5">
  <div className="row">
    <div className="col-md-4 info-box" data-aos="fade-up">
      <h4 className="info-title">Te contactaremos</h4>
      <p className="info-text">Un agente te llamará para explicarte la modalidad...</p>
    </div>
    <div className="col-md-4 info-box" data-aos="fade-up" data-aos-delay="100">
      <h4 className="info-title">Podrás comprar el curso</h4>
      <p className="info-text">Durante la misma llamada manteniendo tus datos seguros.</p>
    </div>
    <div className="col-md-4 info-box" data-aos="fade-up" data-aos-delay="200">
      <h4 className="info-title">Comienza el aprendizaje</h4>
      <p className="info-text">Recibirás un mail de forma inmediata con los accesos.</p>
    </div>
  </div>
</section>


    <section className="info-cursos container mb-5">
  <div className="row">
    <div className="col-md-6 mb-4" data-aos="fade-right">
      <h4 className="info-title">Modalidad</h4>
      <ul className="info-list">
        <li>Presencial y virtual</li>
        <li>3 a 5 horas</li>
        <li>6 personas máximo</li>
        <li>Atención personalizada</li>
      </ul>
    </div>
    <div className="col-md-6 mb-4" data-aos="fade-left">
      <h4 className="info-title">Duración</h4>
      <ul className="info-list">
        <li>De 2 a 8 meses dependiendo el curso</li>
        <li>Podés avanzar a tu ritmo</li>
        <li>Certificación al completar</li>
      </ul>
    </div>
  </div>

  <div className="row justify-content-center text-center">
    <div className="col-md-8" data-aos="zoom-in-up">
      <h4 className="info-title">Tipos</h4>
      <ul className="info-list">
        <li>Curso de pantalonería</li>
        <li>Curso remería</li>
        <li>Producción industrial de uniformes</li>
        <li>Producción industrial de lencería</li>
      </ul>
    </div>
  </div>
</section>

    </div>
  );
};

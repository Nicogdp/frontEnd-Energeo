import React, { useState } from 'react';
import { Carousel, Button, Modal, Form, Container } from 'react-bootstrap';
import '../style/cursos.css';
import curso1 from '../image/bannerEnergeo6.jpg';
import curso2 from '../image/bannerEnergeo8.jpg';
import curso3 from '../image/bannerEnergeo7.jpg';
import Swal from 'sweetalert2';
import testApi from '../Api/testApi';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

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
    const resp = await testApi.post('http://localhost:4000/api/preinscripcion', {
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

  return (
    <div className="cursos-page">
      <Container className="mt-4 mb-5">
        <div className="cursos-carousel-wrapper">
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
            <div className="btn-preinscribirse-container">
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
    <div className="col-md-4 info-box">
      <h4 className="info-title">¿Por qué elegirnos?</h4>
      <p className="info-text">
        Contamos con experiencia comprobada en energías renovables, docentes especializados y material actualizado para tu formación.
      </p>
    </div>
    <div className="col-md-4 info-box">
      <h4 className="info-title">Metodología</h4>
      <p className="info-text">
        Modalidad híbrida: clases online en vivo, material grabado y encuentros presenciales para prácticas reales.
      </p>
    </div>
    <div className="col-md-4 info-box">
      <h4 className="info-title">Certificación</h4>
      <p className="info-text">
        Al finalizar obtendrás una certificación oficial que respalda tus conocimientos en el sector energético.
      </p>
    </div>
  </div>
</section>

    </div>
  );
};

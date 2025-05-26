import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaBuilding } from 'react-icons/fa';
import Swal from 'sweetalert2';
import testApi from '../Api/testApi';
import '../style/consultaPrecio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const ConsultaPrecio = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    negocio: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await testApi.post('/api/email/consulta-precio', formData);

      if (resp.data.ok) {
        Swal.fire({
          title: 'Consulta enviada',
          text: 'Gracias por tu consulta. Pronto nos contactaremos.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });

        setFormData({
          nombre: '',
          email: '',
          negocio: '',
          telefono: '',
          mensaje: ''
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'No se pudo enviar la consulta', 'error');
    }
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="consulta-header" data-aos="fade-down">
        <h1 className="consulta-title">Consultá el Precio con Nosotros</h1>
      </div>

      <Container className="my-5">
  <Row>
    <Col md={6} className="contact-info" data-aos="fade-right">
      <h3>Información de Contacto</h3>
      <p><FaPhoneAlt /> Teléfono: 4287837 </p>
      <p><FaPhoneAlt /> Celular: +54 381 359 0191</p>
      <p><FaEnvelope /> Email: webenergeo@gmail.com</p>
      <p><FaMapMarkerAlt /> Localidad: Tucumán, Argentina</p>
      <p><FaClock /> Horarios: Lunes a Viernes de 9:00 a 18:00</p>
    </Col>

    <Col md={6} data-aos="fade-left">
      <h3>Formulario de Consulta</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNombre" data-aos="fade-up">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail" data-aos="fade-up" data-aos-delay="100">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNegocio" data-aos="fade-up" data-aos-delay="200">
          <Form.Label><FaBuilding /> ¿Cuál es tu negocio?</Form.Label>
          <Form.Select
            name="negocio"
            value={formData.negocio}
            onChange={handleChange}
            required
          >
            <option value="">Seleccioná una opción</option>
            <option>Quiero comprar para mí</option>
            <option>Quiero coser ropa en general</option>
            <option>Voy a empezar un emprendimiento</option>
            <option>Voy a abrir un taller de costura</option>
            <option>Tengo un taller de costura</option>
            <option>Otro...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTelefono" data-aos="fade-up" data-aos-delay="300">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            name="telefono"
            placeholder="Ej: +54 381..."
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMensaje" data-aos="fade-up" data-aos-delay="400">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="mensaje"
            placeholder="Dejanos tu consulta..."
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div data-aos="zoom-in" data-aos-delay="500">
          <Button variant="dark" type="submit" className="w-100">
            Enviar consulta
          </Button>
        </div>
      </Form>
    </Col>
  </Row>
</Container>
    </>
  );
};

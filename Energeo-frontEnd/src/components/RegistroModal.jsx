import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { FiMail, FiLock, FiUser, FiCalendar } from 'react-icons/fi';
import Swal from 'sweetalert2';
import testApi from '../Api/testApi';
import '../style/modalEstilos.css';

const RegistroModal = ({ show, handleClose }) => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registroBackend = async () => {
    try {
      const resp = await testApi.post('/auth/registro', {
        nombre,
        edad,
        email,
        password,
      });
      Swal.fire({
        position: 'center',
        title: 'Usuario creado exitosamente',
        icon: 'success',
        timer: 1500,
      });
      handleClose();
    } catch (error) {
      const msg = error.response?.data?.msg || 'Error en el servidor';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: msg,
      });
    }
  };

  const handleRegistro = (e) => {
    e.preventDefault();
    registroBackend();
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleRegistro}>
          <div className="input-group-custom">
            <FiUser className="input-icon" />
            <Form.Control type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
          </div>

          <div className="input-group-custom">
            <FiCalendar className="input-icon" />
            <Form.Control type="number" placeholder="Edad" onChange={(e) => setEdad(e.target.value)} />
          </div>

          <div className="input-group-custom">
            <FiMail className="input-icon" />
            <Form.Control type="email" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="input-group-custom">
            <FiLock className="input-icon" />
            <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <Button variant="dark" type="submit" className="w-100 mt-2">
            Registrarse
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegistroModal;

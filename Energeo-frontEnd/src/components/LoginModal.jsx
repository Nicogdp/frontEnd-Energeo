import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { FiMail, FiLock } from 'react-icons/fi';
import Swal from 'sweetalert2';
import testApi from '../Api/testApi';
import '../style/modalEstilos.css';

const LoginModal = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginBackend = async () => {
    try {
      const resp = await testApi.post('/auth/login', { email, password });
      Swal.fire({
        position: 'center',
        title: 'Usuario logueado exitosamente',
        icon: 'success',
        timer: 1500,
      });
      localStorage.setItem('token', resp.data.token);
      handleClose();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error de login',
        text: error.response?.data?.msg || 'Ocurrió un error',
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginBackend();
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <div className="input-group-custom">
            <FiMail className="input-icon" />
            <Form.Control
              type="email"
              placeholder="Correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group-custom">
            <FiLock className="input-icon" />
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button variant="dark" type="submit" className="w-100 mt-2">
            Ingresar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;

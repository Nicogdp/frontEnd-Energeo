import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import testApi from '../Api/testApi';
import Swal from 'sweetalert2'

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginBackend = async (email,password) =>{
    try {
      const resp = await testApi.post('/auth/login',{
        email,
        password,
      });
        Swal.fire({
          position:'center',
         title: "Usuario Logueado exitosamente",
         icon: "success",
        draggable: true
});
      localStorage.setItem('token',resp.data.token)
      
    } catch (error) {
      console.log(error)
    }
  };

  const handleLogin = (e) =>{
    e.preventDefault();

    //validaciones
    //...
    //fin de las validaciones
    loginBackend(email,password);
  };

  return (
    <div>
      <h1>Login</h1>
     <Form className='w-50 p-3' onSubmit={handleLogin}  >
      <Form.Group className="mb-3" >
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>


      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>

    </div>
  )
}

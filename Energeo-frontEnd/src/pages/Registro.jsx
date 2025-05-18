import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import testApi from '../Api/testApi';
import Swal from 'sweetalert2'

export const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registroBackend = async (nombre,edad,email,password) =>{
    try {
      const resp = await testApi.post('/auth/registro',{
        nombre,
        edad,
        email,
        password,
      });
        Swal.fire({
          position:'center',
         title: "Usuario creado",
         icon: "success",
        draggable: true
});
      console.log(resp);
      
    } catch (error) {
      if(error.response.status === 400){
             Swal.fire({
               icon: "error",
              title: "Oops...",
              text: error.response.data.msg,
  
});
        
      }else if(error.response.status === 500){
         Swal.fire({
               icon: "error",
              title: "Oops...",
              text: 'Contactarse con un administrador',
  
});
      }
 
    }
  };
  
 


  const handleRegistro = (e) =>{
    e.preventDefault();

    //validaciones
    //...
    //fin de las validaciones
    registroBackend(nombre,edad,email,password);
  };

  return (
    <div>
      <h1>Registrarse</h1>
     <Form className='w-50 p-3' onSubmit={handleRegistro}  >
      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" onChange={(e) => setNombre(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" onChange={(e) => setEdad(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>


      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>

    </div>
  )
}

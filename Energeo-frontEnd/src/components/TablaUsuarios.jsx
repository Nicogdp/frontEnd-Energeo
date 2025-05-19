import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import testApi from '../Api/testApi'

export const TablaUsuarios = () => {
    const [listaUsuarios, setListaUsuarios] = useState([]);



    const getUsuarios = async () => {
        try {
            const resp = await testApi.get('/admin/usuarios');
           setListaUsuarios(resp.data.listaUsuarios);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getUsuarios();
    }, []);
    
  return (
    <div>

     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {listaUsuarios.map((usuario)=>{
            return(
                <tr>
                    <td>{usuario._id}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.edad}</td>
                    <td>{usuario.email}</td>
                </tr>
            )
        })}
      </tbody>
      
    </Table></div>
  )
}

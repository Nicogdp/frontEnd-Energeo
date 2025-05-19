import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, ModalBody, Table } from 'react-bootstrap'
import testApi from '../Api/testApi'

export const TablaProductos = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const [show, setShow] = useState(false);

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [showEditar, setShowEditar] = useState(false)
    const [productoEditar, setProductoEditar] = useState({})

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);



    const getProductos = async () => {
        try {
            const resp = await testApi.get('/admin/productos');
           setListaProductos(resp.data.listaProductos);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getProductos();
    }, []);

    const crearProductosBackend = async (nombre,precio,descripcion) => {
        try {
            const resp = await testApi.post('/admin/crearProducto',{
                nombre,
                precio,
                descripcion,
            });
            getProductos();
    
        } catch (error) {
            
        }
    }

    const handleCrearProducto = (e) =>{
        e.preventDefault()
        //validaciones
        //...
        //fin de las validaciones

        crearProductosBackend(nombre,precio,descripcion)
    };

    //funcion encargada de eliminar el producto
    const eliminarProductoClick = async (id) =>{
        try {
            const resp = await testApi.delete(`admin/eliminarProducto/${id}`);
            getProductos();
        } catch (error) {
            console.log(error)
        }
    };

    //funcion para editar el producto
    const editarProducto =  (producto) => {
        try {
            console.log(producto)
            setShowEditar(true)
            setProductoEditar(producto)
        } catch (error) {
            
        }
    };

    //funcion para leer los valores que pone el usuario en el campo
    const handleChangeEditar = (propiedad, valor) => {
    setProductoEditar({
        ...productoEditar,
        [propiedad]:valor,
    });
    };

    const editarProductoBackend = async (producto) => {
        const {nombre,precio,descripcion,_id} = producto
        try {
            const resp = await testApi.put('/admin/editarProducto',{
             nombre,
             precio,
             descripcion,
             _id
            });
            getProductos();
        setShowEditar(false);
        } catch (error) {
            console.log(error)
        }
    }

    const handleEditarProducto = (e) => {
        e.preventDefault();
        //validaciones 
        //if(productoeditar === '')
        //fin de las validaciones

        editarProductoBackend(productoEditar)
    };
    
  return (
    <div>
         <Button variant="primary my-4" onClick={handleShow}>
        +Nuevo producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear producto</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Form onSubmit={handleCrearProducto}>
             <Form.Group className="mb-3" >
              <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" onChange={(e) => setNombre(e.target.value)}  />
            </Form.Group>
              <Form.Group className="mb-3" >
              <Form.Label>Precio</Form.Label>
                <Form.Control type="number"  onChange={(e) => setPrecio(e.target.value)}  />
            </Form.Group>
              <Form.Group className="mb-3" >
              <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text"  onChange={(e) => setDescripcion(e.target.value)}/>
            </Form.Group>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button type='submit' variant="primary" onClick={handleClose}>
            Guardar producto
          </Button>
        </Form>
       </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Descripcion</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {listaProductos.map((productos)=>{
            return(
                <tr>
                    <td>{productos._id}</td>
                    <td>{productos.nombre}</td>
                    <td>{productos.precio}</td>
                    <td>{productos.descripcion}</td>
                    <td>
                    <Button onClick={() => editarProducto(productos)} className='btn-btn-warning'>Editar</Button>
                    <Button className='btn-btn-danger ms-2' onClick={() => eliminarProductoClick(productos._id)}
                        >Eliminar</Button>
                    </td>
                </tr>
            )
        })}
      </tbody>  
    </Table>


        <Modal show={showEditar}>
            <Modal.Header closeButton>
                <Modal.Title>Editar producto</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleEditarProducto}>
                <Modal.Body>
                     <Form.Group className="mb-3" >
                         <Form.Label>Nombre del producto</Form.Label>
                          <Form.Control type="text"
                           value={productoEditar.nombre}
                           onChange={(e) => handleChangeEditar('nombre', e.target.value)}  />
                      </Form.Group>
                      <Form.Group className="mb-3" >
                        <Form.Label>Precio</Form.Label>
                          <Form.Control type="text"
                          value={productoEditar.precio}
                          onChange={(e) => handleChangeEditar('precio', e.target.value)} />
                      </Form.Group>
                      <Form.Group className="mb-3" >
                       <Form.Label>Descripcion</Form.Label>
                       <Form.Control type="text"
                          value={productoEditar.descripcion}
                          onChange={(e) => handleChangeEditar('descripcion', e.target.value)} />
                      </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => setShowEditar(false)}>
                        Cerrar
                    </Button>
                    <Button 
                    type='submit'
                    variant='primary'>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>


    </div>
  )
}

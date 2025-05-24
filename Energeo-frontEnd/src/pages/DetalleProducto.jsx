import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/detalleProducto.css'
import Zoom from 'react-medium-image-zoom';
import '../style/App.css'
import 'react-medium-image-zoom/dist/styles.css';
import envios from '../image/imgEnvios.png'
import TarjetaProducto from '../components/TarjetaProducto';
import pago from '../image/imgPago.png'
import testApi from '../Api/testApi';

export const DetalleProducto = () => {
  const { state } = useLocation();
  const producto = state?.producto;
  const [productosRelacionados, setProductosRelacionados] = useState([]);

    useEffect(() => {
    const getProductos = async () => {
      try {
       const resp = await testApi.get('/admin/productos');
          const todosLosProductos = resp.data.listaProductos;

       // Filtramos el producto actual
       const relacionados = todosLosProductos.filter(p => p._id !== producto._id);
       setProductosRelacionados(relacionados);
      } catch (error) {
       console.log(error);
     }
     };

     if (producto) {
      getProductos();
    }
    }, [producto]);


  if (!producto) {
      return <p>Producto no encontrado.</p>;
    }


    const navigate = useNavigate();

    const handleVerMas = (producto) => {
    navigate('/detalleProducto', { state: { producto } });


};

  return (
    <Container className="my-5 descripcion">
      <Row>
        {/* Columna izquierda con imagen */}
        <Col md={6}>
        <Zoom>

        <img
         src={producto.imagen}
          className='img-fluid'
        />
        </Zoom>
        </Col>
        {/* Columna derecha con info */}
        <Col md={6}>
          <h2 className='descripcion'>{producto.nombre}</h2>
          <h4 className='descripcion'>{producto.descripcion}</h4>
          <h4>${producto.precio}</h4>

           <Row className="align-items-center mb-3 mt-3">
            <Col xs="auto">
              <img src={envios} alt="Envíos" style={{ width: '40px' }} />
            </Col>
            <Col>
              <h5 className="mb-0">Envíos a todo el país</h5>
            </Col>
          </Row>

          {/* Fila 2 - Medios de pago */}
          <Row className="align-items-center mb-4">
            <Col xs="auto">
              <img src={pago} alt="Pago" style={{ width: '40px' }} />
            </Col>
            <Col>
              <h5 className="mb-0">Aceptamos efectivo y transferencia</h5>
            </Col>
          </Row>
          <Button className='p-3 ' variant="dark">Consultar Precio</Button>
        </Col>
      </Row>

      <div className="relacionados-container">
  <h3>Productos relacionados</h3>
    <Row>
      {productosRelacionados.slice(0, 4).map(p => (
  <Col key={p._id} md={3} className="mb-4">
    <TarjetaProducto producto={p} />
  </Col>
))}

     </Row>
    </div>

    </Container>
  );
};
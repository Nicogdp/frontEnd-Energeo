import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios'; // asegurate de tener axios instalado
import '../style/shop.css';
import '../style/App.css'
import { FaSearch } from 'react-icons/fa';
import bannerEnergeo from '../image/bannerShopp.jpg'
import testApi from '../Api/testApi';
import '../style/tarjetaProducto.css'; // o donde lo tengas
import TarjetaProducto from '../components/TarjetaProducto';
import { useNavigate } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Shop = () => {
  const [productos, setListaProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('')
  const [precioMin, setPrecioMin] = useState('');
  const [precioMax, setPrecioMax] = useState('');



  
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
    AOS.init({ duration: 1000 });
  }, []);
  
  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const cumpleMin = precioMin === '' || producto.precio >= parseFloat(precioMin);
    const cumpleMax = precioMax === '' || producto.precio <= parseFloat(precioMax);
    return coincideNombre && cumpleMin && cumpleMax;
  });
  
  const navigate = useNavigate();

  const handleComprar = (producto) => {
    navigate('/detalleProducto', { state: { producto } });
  };

  return (
    <div>
      {/* Banner */}
      <article className="container-fluid d-flex align-items-center bannerShop">
        <img
          className="d-block w-100 h-100 imagenBanner"
          src={bannerEnergeo}
          alt="banner shop"
        />
      </article>

      {/* Sección de productos dinámicos */}
      <Container className="my-5">
      <Form className="mb-4" data-aos="fade-down">
  <Row>
    <Col md={4} className="input-icono mb-2">
      <FaSearch className="icono" />
      <Form.Control
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </Col>

    <Col md={2} className="mb-2">
      <Form.Control
        type="number"
        placeholder="Precio mínimo"
        value={precioMin}
        onChange={(e) => setPrecioMin(e.target.value)}
      />
    </Col>

    <Col md={2} className="mb-2">
      <Form.Control
        type="number"
        placeholder="Precio máximo"
        value={precioMax}
        onChange={(e) => setPrecioMax(e.target.value)}
      />
    </Col>
  </Row>
</Form>
        <h2 className="mb-4" data-aos="fade-right">Nuestros productos</h2>
       <Row>
  {productosFiltrados.map((producto, index) => (
    <Col
      md={4}
      className="mb-4"
      key={producto._id || index}
      data-aos="fade-up"
      data-aos-delay={index * 100} // animación escalonada
    >
      <TarjetaProducto producto={producto} />
    </Col>
  ))}
</Row>
      </Container>

    </div>
  );
};

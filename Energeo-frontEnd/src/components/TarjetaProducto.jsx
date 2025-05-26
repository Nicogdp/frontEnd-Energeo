import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style/tarjetaProducto.css';

const TarjetaProducto = ({ producto }) => {
  const navigate = useNavigate();

  const handleVerMas = () => {
    navigate('/detalleProducto', { state: { producto } });
  };

  return (
    <div className="card-relacionado">
      {producto.imagen && (
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="img-fluid"
        />
      )}
      <div className="contenido">
        <h5 className='descripcionn'>{producto.nombre}</h5>
        <Button variant="outline-dark" onClick={handleVerMas}>
          Ver más
        </Button>
      </div>
    </div>
  );
};

export default TarjetaProducto;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/sobreNosotros.css'; // crea este archivo para estilos personalizados
import imagenEquipo from '../image/sobreNosotros.jpg'; // reemplaza con tu imagen real

export const SobreNosotros = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="sobre-nosotros-container container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
          <img src={imagenEquipo} alt="Nuestro equipo" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h2 className="mb-4">Sobre Nosotros</h2>
          <p className="lead">
            Energeo es una empresa familiar que nació del esfuerzo, la pasión y la perseverancia.
Todo comenzó con Mónica Sánchez, una mujer que desde muy pequeña sintió una profunda curiosidad y amor por el mundo de la fabricación textil. Sin embargo, los caminos no fueron fáciles. Las dificultades económicas y la falta de acceso a insumos y capacitación hicieron que avanzar fuera un verdadero desafío.
Pero Mónica no se rindió. Gracias a su determinación, logró capacitarse por más de 38 años en técnicas industriales de fabricación textil, participando en concursos, perfeccionando su conocimiento y abriéndose camino en un rubro tradicionalmente exigente. Con el tiempo, sus sueños comenzaron a tomar forma.
Así nació Energeo, una empresa que no solo se dedica a la venta de máquinas textiles industriales, sino que también lleva adelante un compromiso con la formación y el crecimiento de otros emprendedores, brindando cursos y capacitaciones accesibles, prácticas y de calidad.
Hoy, Energeo es sinónimo de trabajo en equipo, atención personalizada y vocación por ayudar a otros a cumplir sus sueños, tal como lo hizo su fundadora.
          </p>
        </div>
      </div>
    </div>
  );
};

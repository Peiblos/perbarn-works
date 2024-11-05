import React from 'react';
import './Presentation.css';
import empresarioImg from '../../assets/empresario.jpg';

const Presentation: React.FC = () => {
  return (
    <section className="presentation">
      <h2>Sobre Nosotros</h2>
      <div className="presentation-content">
        <p>
          Somos una empresa dedicada a las reformas integrales, especializándonos en la renovación de baños, cocinas, oficinas y locales comerciales.
        </p>
        <img src={empresarioImg} alt="Foto del Empresario" />
      </div>
    </section>
  );
};

export default Presentation;

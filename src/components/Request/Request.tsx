import React from 'react';
import './Request.css';

const Request: React.FC = () => {
  return (
    <section className="quote-request">
      <h2>Solicita tu Presupuesto</h2>
      <p>
        Rellena el formulario para solicitar un presupuesto personalizado según tus necesidades.
      </p>
      <button>Solicitar Presupuesto</button>
    </section>
  );
};

export default Request;

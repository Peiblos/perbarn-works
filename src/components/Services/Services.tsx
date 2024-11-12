import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHammer } from '@fortawesome/free-solid-svg-icons';
import './Services.css';


const Services: React.FC = () => {
    return (
        <section className="services">            
            <div className="service-item" id="integral">
                <img src="/assets/icons/brick-wal.svg" alt="Icono de Reforma Integral" className="service-icon" />
                {/* <FontAwesomeIcon icon={faHammer} /> */}
                <h3>Reforma Integral</h3>
            </div>
            <div className="service-item" id="bano">
                <img src="/assets/icons/bathroom.svg" alt="Icono de Reforma Integral" className="service-icon" />
                {/* <FontAwesomeIcon icon={faHammer} /> */}
                <h3>Baño</h3>
            </div>
            <div className="service-item" id="cocina">
                <img src="/assets/icons/kitchen.svg" alt="Icono de Reforma Integral" className="service-icon" />
                {/* <FontAwesomeIcon icon={faHammer} /> */}
                <h3>Cocina</h3>
            </div>
            <div className="service-item" id="oficina">
                <img src="/assets/icons/chair.svg" alt="Icono de Reforma Integral" className="service-icon" />
                {/* <FontAwesomeIcon icon={faHammer} /> */}
                <h3>Oficina</h3>
            </div>
            <div className="service-item" id="local">
                <img src="/assets/icons/office.svg" alt="Icono de Reforma Integral" className="service-icon" />
                {/* <FontAwesomeIcon icon={faHammer} /> */}
                <h3>Local Comercial</h3>
            </div>
        </section>
    );
};

export default Services;


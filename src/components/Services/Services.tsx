import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services: React.FC = () => {
    return (
        <section className="services">
            <div className="service-item" id="integral">
                <FontAwesomeIcon icon={faHammer} />
                <h3>Reforma Integral</h3>
            </div>
            <div className="service-item" id="bano">
                <FontAwesomeIcon icon={faHammer} />
                <h3>Baño</h3>
            </div>
            <div className="service-item" id="cocina">
                <FontAwesomeIcon icon={faHammer} />
                <h3>Cocina</h3>
            </div>
            <div className="service-item" id="oficina">
                <FontAwesomeIcon icon={faHammer} />
                <h3>Oficina</h3>
            </div>
            <div className="service-item" id="local">
                <FontAwesomeIcon icon={faHammer} />
                <h3>Local Comercial</h3>
            </div>
        </section>
    );
};

export default Services;

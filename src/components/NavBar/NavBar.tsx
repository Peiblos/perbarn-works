import React, { useState } from 'react';
import './NavBar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="hamburger-icon">&#9776;</span>
      </div>
      <div className="navbar-logo">
        <h1>Perbarn</h1>
      </div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#perbarn">Perbarn</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
        </ul>
        <button className="navbar-button">Solicitar Presupuesto</button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ onModalOpen }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src="src\assets\logoSinFondo.png" alt="Logo" />
        <h1>Tus Pruebas</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/colaboracion">COLABORACION</Link></li>
          <li onClick={onModalOpen} style={{ cursor: 'pointer' }}>CONTACTO</li>
          <li><Link to="/escuelas">ESCUELAS</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

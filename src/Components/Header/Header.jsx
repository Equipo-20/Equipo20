import React from 'react';
import ImageLogo from '../../Assets/Images/logo202.png'; 
import './Header.css';

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
          <img src={ImageLogo} alt="Logo" />
        </div>
        <div className="navigation">
          <a href="/">Inicia sesión</a>
          <a href="/servicios">Registrate</a>
        </div>
    </header>
  );
};

export default Header;
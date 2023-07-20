import React from 'react';
import ImageFc from '../../Assets/Images/Vector (1).png';
import ImageInsta from '../../Assets/Images/Vector.png';
import ImageTwitter from '../../Assets/Vector copia.png';
import  './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="follow-us">
          <p>Follow us!</p>
          <div className="social-icons">
            <img src={ImageFc}  alt="icono facebook" />
          </div>
          <img src={ImageInsta}  alt="icono instagram" />
          <div>
          <img src={ImageTwitter} alt="icono twitter" />
        </div>
        </div>
        <div className="copyright">
          <ul>
              <li><p>Politica de privacidad</p></li>
              <li><p>Aviso Legal</p></li>
              <li><p>Politica de Cookies</p></li>
            
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



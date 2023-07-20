import React from 'react';
import ImageFc from '../../Assets/Images/Vector (1).png';
import ImageInsta from '../../Assets/Images/Vector.png';
import ImageTwitter from '../../Assets/Vector copia.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="follow-us">
          <p>Follow us!</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <img src={ImageFc} alt="icono facebook" />
            </a>
          </div>
          <a href="https://www.instagram.com/">
            <img src={ImageInsta} alt="icono instagram" />
          </a>
          <div>
            <a href="https://www.twitter.com/">
              <img src={ImageTwitter} alt="icono twitter" />
            </a>
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
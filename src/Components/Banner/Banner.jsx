import React, { useState, useEffect } from "react";
import Imagen1 from '../../Assets/Images/ImageBanner/manos1.jpg';
import Imagen2 from '../../Assets/Images/ImageBanner/masaje1.jpg';
import Imagen3 from '../../Assets/Images/ImageBanner/time-on-my-hands.jpg';
import "./Banner.css";

const imgBanner = [Imagen1, Imagen2, Imagen3];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgBanner.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlider = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imgBanner.length) % imgBanner.length);
  };

  const nextSlider = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgBanner.length);
  };

  return (
    <div className="banner">
      <div className="img-container">
        {imgBanner.map((img, index) => (
          <div
            key={index}
            className={`img-slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={img} alt={`foto ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={prevSlider}>&#10094;</button>
        <button onClick={nextSlider}>&#10095;</button>
      </div>
    </div>
  );
};

export default Banner;
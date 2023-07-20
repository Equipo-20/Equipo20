import React from 'react';
import Photo from './PhotoAndDescr';
import Bella1 from '../Assets/Images/Bella1.jpg';
import guitarra1 from '../Assets/Images/guitarra1.jpg';
import masaje1 from '../Assets/Images/masaje1.jpg';
import trabajadora1 from '../Assets/Images/trabajadora1.jpg';
import '../App.css';

const Body_pag2 = () => {
  const imagesData = [
    {
      imageUrl: Bella1,
      description: "Perrita para pasear",
    },
    {
      imageUrl: guitarra1,
      description: "Clases de guitarra",
    },
    {
      imageUrl: masaje1,
      description: "Masajes a domicilio",
    },
    {
    imageUrl: trabajadora1,
    description: "Fontanería y electricidad",
    }
  ];

  return (
    <div className='body-container'>
      <h2>Listado Anuncios</h2>
      <div className='background-image'>
        <div className='photo-columns'>
          {imagesData.map((data, index) => (
            <div key={index} className='photo-descrip'>
              <Photo imageURL={data.imageUrl} description={data.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body_pag2;

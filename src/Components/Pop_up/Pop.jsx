import { useState, useEffect } from "react";
import Modal from "react-modal";
import './App.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  

  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCharacters(data);
      });
  }, []);

  const openPopup = (character) => {
    setSelectedCharacter(character);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  // render(){

  const customModalStyles = {
    content: {
      width: '636px', 
      height: '481px', 
      background: ' rgba(20, 85, 251, 1)',
      borderRadius: '35px',
      marginLeft: '520px',
  }

   };

  return (
    <div className="contenedor">
      {characters.map((character) => (
        <div className="texto" key={character.name}>
          <img
            className="img"
            src={character.image}
            alt={character.name}
            onClick={() => openPopup(character)}
          />
          <h3 className="h3">{character.name}</h3>
          <p>Estado: {character.alive ? "Vivo" : "Muerto"}</p>
          <p>Casa: {character.house}</p>
        </div>
      ))}
      <Modal
        isOpen={isOpen}
        onRequestClose={closePopup}
        contentLabel="Información del personaje"
        style={customModalStyles}
      >
        {selectedCharacter && (
          <div className="popup">
            <button className="closeButton" onClick={closePopup}>
              X
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Characters;
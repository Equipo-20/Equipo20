// import { useState, useEffect } from "react";
// /*import Modal from "react-modal";*/
// import "./pop.css"

// const Characters = () => {
//     const [characters, setCharacters] = useState([]);
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedCharacter, setSelectedCharacter] = useState(null);
  
//     useEffect(() => {
//      /* fetch("https://Ejemplo de una bases de datos")
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           setCharacters(data);
//         });
//     }, []);*/
  
//     const openPopup = (character) => {
//       setSelectedCharacter(character);
//       setIsOpen(true);
//     };
  
//     const closePopup = () => {
//       setIsOpen(false);
//     };
// return (
//     <div className="contenedor">
//     {characters.map((character) => (
//       <div className="texto" key={character.name}>
//         <img
//           className="img"
//           src={character.image}
//           alt={character.name}
//           onClick={() => openPopup(character)}
//         />
//         <h3 className="h3">{character.name}</h3>
//         <p>Estado: {character.alive ? "Vivo" : "Muerto"}</p>
//         <p>Casa: {character.house}</p>
//       </div>
//       </>
//     ))}
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={closePopup}
//       contentLabel="Información del personaje"
//     >
//       {selectedCharacter && (
//         <div className="popup">
//           <h1>{selectedCharacter.name}</h1>
//          <img className="img"
//           src={selectedCharacter.image}
//           alt={selectedCharacter.name} />
//           <p>Color de ojos: {selectedCharacter.eyeColour}</p>
//           <p>Color del cabello: {selectedCharacter.hairColor}</p>
//           <p>Estado: {selectedCharacter.alive ? "Vivo" : "Muerto"}</p>
//           <p>Casa: {selectedCharacter.house}</p>
//           <p>Especie: {selectedCharacter.species}</p>
//           <p>Patronus: {selectedCharacter.patronus}</p>
//           <p>Nacimiento: {selectedCharacter.dateOfBirth}</p>
//           <p>{selectedCharacter.description}</p>
//         </div>
//       )}
//     </Modal>
//   </div>
// );
// };

// export default Characters;
import { useState } from "react";
import "./Search.css"

const Search =() => {

// Estado para los valores de los buscadores
    const [search1, setSearch1] = useState('');
    const [search2, setSearch2] = useState('');

// Estado para los valores de los checkboxes
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);

// Funciones para manejar los cambios en los buscadores y checkboxes
    const handleSearch1Change = (event) => {
        setSearch1(event.target.value);
      };
    
      const handleSearch2Change = (event) => {
        setSearch2(event.target.value);
      };
    
      const handleCheckbox1Change = () => {
        setCheckbox1((prevState) => !prevState);
      };
    
      const handleCheckbox2Change = () => {
        setCheckbox2((prevState) => !prevState);
      };

      // Función para filtrar los datos basados en los valores de búsqueda y checkboxes
  const filteredData = data.filter((item) => {
    // Realizamos la búsqueda ignorando mayúsculas y minúsculas
    const search1Match = item.name.toLowerCase().includes(search1.toLowerCase());
    const search2Match = item.name.toLowerCase().includes(search2.toLowerCase());
    
     // Filtramos los elementos basados en las opciones seleccionadas en los checkboxes
     const checkbox1Match = checkbox1 ? item.id <= 3 : true;
     const checkbox2Match = checkbox2 ? item.id > 3 : true;
 
     // Retornamos true si el elemento coincide con todos los criterios de búsqueda
     return search1Match && search2Match && checkbox1Match && checkbox2Match;
    });

      return (
        <div>
        {/* Buscador 1 */}
        <input
          type="text"
          value={search1}
          onChange={handleSearch1Change}
          placeholder="Buscar en 1..."
        />
        {/* Buscador 2 */}
        <input
          type="text"
          value={search2}
          onChange={handleSearch2Change}
          placeholder="Buscar en 2..."
        />
  
        {/* Checkbox 1 */}
        <label>
          <input
            type="checkbox"
            checked={checkbox1}
            onChange={handleCheckbox1Change}
          />
          Opción 1
        </label>
  
        {/* Checkbox 2 */}
        <label>
          <input
            type="checkbox"
            checked={checkbox2}
            onChange={handleCheckbox2Change}
          />
          Opción 2
        </label>
        {/* Mostramos los resultados de la búsqueda */}
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      </div>
    );
  };
  
  export default Search;

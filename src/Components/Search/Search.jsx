import { useState } from "react";
import "./Search.css"

const Search =() => {

    const [search1, setSearch1] = useState('');
    const [search2, setSearch2] = useState('');

    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);

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
      </div>
    );
  };
  
  export default Search;

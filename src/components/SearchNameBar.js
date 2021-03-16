import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchNameBar() {
  const { searchName, setSearchName, filteredData, setFilteredData } = useContext(StarWarsContext);
  const handleChange = ({ target }) => {
    setSearchName(target.value);
  };

  console.log(searchName);
  return (
    <div>
      <label htmlFor="text" data-testid="text-input-label">
        Inclui o texto no nome:
        <input
          data-testid="text-input"
          type="text"
          name="searchName"
          value={searchName}
          onChange={handleChange}
        />
      </label>
      <button type="button">Filtrar</button>
    </div>
  );
}

export default SearchNameBar;

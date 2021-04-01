import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchName() {
  const { setName } = useContext(StarWarsContext);
  console.log('SearchName');
  return (
      <label htmlFor="text" data-testid="text-input-label">
        Inclui o texto no nome:
        <input
          id="text"
          data-testid="name-filter"
          type="text"
          name="searchName"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
  );
}

export default SearchName;

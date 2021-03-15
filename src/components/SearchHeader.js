import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchHeader() {
  const {
    filterName,
  } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        onChange={ (event) => filterName(event.target.value) }
        data-testid="name-filter"
      />
    </div>
  );
}

export default SearchHeader;

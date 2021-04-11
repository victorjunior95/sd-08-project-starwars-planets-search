import React, { useContext } from 'react';
import SearchPlanetsContext from '../context/SearchPlanetsContext';

function Search() {
  const { filterPlanetsByName } = useContext(SearchPlanetsContext);
  const handleChange = ({ target: { value } }) => {
    filterPlanetsByName(value);
  };

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </section>
  );
}

export default Search;

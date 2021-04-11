import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Search = () => {
  const { filteredPlanets: filteredSWPlanets } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Type to search"
        data-testid="name-filter"
        onChange={
          ({ target: { value } }) => filteredSWPlanets(value)
        }
      />
    </div>
  );
};

export default Search;

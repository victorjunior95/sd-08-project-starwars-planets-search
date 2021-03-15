import React, { useContext } from 'react';
import PlanetsStarWarsContext from '../context/PlanetsStarWarsContext';

function Forms() {
  const { handleChange } = useContext(PlanetsStarWarsContext);

  return (
    <form>
      <label htmlFor="filter-name">
        Filter Name:
        <input
          type="text"
          name="filter-name"
          onChange={ (event) => handleChange(event) }
          data-testid="name-filter"
        />
      </label>
    </form>
  );
}

export default Forms;

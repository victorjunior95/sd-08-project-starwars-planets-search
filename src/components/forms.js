import React, { useContext } from 'react';
import PlanetsStarWarsContext from '../context/PlanetsStarWarsContext';

function Forms() {
  const { handleChange, clickButton } = useContext(PlanetsStarWarsContext);

  return (
    <form>
      <label htmlFor="filterByName">
        Filter Name:
        <input
          type="text"
          name="filterByName"
          onChange={ (event) => handleChange(event) }
          data-testid="name-filter"
        />
      </label>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ (event) => handleChange(event) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ (event) => handleChange(event) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ (event) => handleChange(event) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => clickButton() }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Forms;

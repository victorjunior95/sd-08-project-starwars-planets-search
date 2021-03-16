import React from 'react';
import SWPlanetsContext from '../context/SWPlanetsContext';

function NumericFilter() {
  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        // onChange={ handleChange }
        // value={ }
      >
        <option>rotation_period</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>surface_water</option>
        <option>population</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        // value={ }
        // onChange={ handleChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        placeholder="0"
        // value={ }
        // onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        // onClick={ handleFilter }
      >
        Filter
      </button>
    </div>
  );
}

export default NumericFilter;

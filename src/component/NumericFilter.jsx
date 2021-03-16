import React, { useContext, useState } from 'react';
import SWPlanetsContext from '../context/SWPlanetsContext';

function NumericFilter() {
  const { filtersPlanets, setFiltersPlanets } = useContext(SWPlanetsContext);
  const [filterNumbers, setFilterNumbers] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const { filterByNumericValues } = filtersPlanets;
  const { column, comparison, value } = filterNumbers;

  const handleChange = (event) => {
    setFilterNumbers({
      ...filterNumbers,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickFilter = () => {
    setFiltersPlanets({
      ...filtersPlanets,
      filterByNumericValues: {
        ...filterByNumericValues,
        ...filterNumbers,
      },
    });
  };

  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleChange }
        value={ column }
      >
        <option key="rotation_period">rotation_period</option>
        <option key="orbital_period">orbital_period</option>
        <option key="diameter">diameter</option>
        <option key="surface_water">surface_water</option>
        <option key="population">population</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ handleChange }
      >
        <option key="maior">maior que</option>
        <option key="menor">menor que</option>
        <option key="igual">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        value={ value }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickFilter }
      >
        Filter
      </button>
    </div>
  );
}

export default NumericFilter;

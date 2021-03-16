import React, { useContext } from 'react';
import AppContext from '../utils/AppContext';

const Filters = () => {
  const { handleChange, handleClick, filters, setFilters } = useContext(AppContext);
  function filterChange(e) {
    // setParams({
    //   ...filterParams,
    //   [e.target.name]: e.target.value,
    // });
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filters.filterByNumericValues[0],
          [e.target.name]: e.target.value,
        },
      ],
    });
  }

  return (
    <header>
      <input type="text" data-testid="name-filter" onChange={ handleChange } />
      <select data-testid="column-filter" name="column" onChange={ filterChange }>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select data-testid="comparison-filter" name="comparison" onChange={ filterChange }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="text"
        name="value"
        onChange={ filterChange }
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </header>
  );
};

export default Filters;

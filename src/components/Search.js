import React, { useContext, useState } from 'react';
import SearchPlanetsContext from '../context/SearchPlanetsContext';

function Search() {
  const {
    filterByName,
    filterByNumericValues } = useContext(SearchPlanetsContext);
  const [filters, setFilters] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const handleChange = ({ target: { value } }) => {
    filterByName(value);
  };

  const handleChangeFilter = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleButton = (event) => {
    event.preventDefault();
    filterByNumericValues(filters);
  };

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
      />
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleChangeFilter }
        required
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleChangeFilter }
        required
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleChangeFilter }
        required
      />
      <button type="button" data-testid="button-filter" onClick={ handleButton }>
        Filtrar
      </button>
    </section>
  );
}

export default Search;

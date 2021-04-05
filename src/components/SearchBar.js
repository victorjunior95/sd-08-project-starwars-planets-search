import React, { useContext, useState } from 'react';
import AppContext from '../context/Context';

const SearchBar = () => {
  const { filterByName, filterByNumericValues } = useContext(AppContext);
  const [filters, setFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 'null',
  });

  const handleChange = ({ target: { value } }) => {
    filterByName(value);
  };

  const handleFilter = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleButton = (e) => {
    e.preventDefault();
    filterByNumericValues(filters);
  };

  return (
    <form>
      <section className="search-bar">
        <input
          type="text"
          name="searchText"
          id="searchText"
          onChange={ handleChange }
          data-testid="name-filter"
          className="input"
        />
        <select
          data-testid="column-filter"
          name="column"
          onChange={ handleFilter }
          required
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleFilter }
          required
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          type="number"
          name="value"
          data-testid="value-filter"
          onChange={ handleFilter }
          required
        />
        <button
          data-testid="button-filter"
          type="submit"
          onClick={ handleButton }
        >
          Filtrar
        </button>
      </section>
    </form>
  );
};

export default SearchBar;

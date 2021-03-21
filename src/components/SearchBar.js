import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/planetsContext';

const SearchBar = () => {
  const { filterByName, filterByNumericValues } = useContext(PlanetsContext);
  const [filters, setFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: null,
  });

  const handleNameChange = ({ target: { value } }) => {
    filterByName(value);
  };

  const handleFiltersChange = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    filterByNumericValues(filters);
  };

  return (
    <section>
      <header>
        <h1>In a galaxy far far away...</h1>
      </header>
      <form>
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Enter the planet name"
          onChange={ handleNameChange }
        />

        <select
          data-testid="column-filter"
          name="column"
          onChange={ handleFiltersChange }
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
          onChange={ handleFiltersChange }
          required
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>

        <input
          data-testid="value-filter"
          name="value"
          type="number"
          onChange={ handleFiltersChange }
          required
        />

        <button
          data-testid="button-filter"
          type="submit"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </form>
    </section>
  );
};

export default SearchBar;

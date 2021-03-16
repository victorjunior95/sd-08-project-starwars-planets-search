import React, { useContext } from 'react';
import PlanetContext from '../contexts/PlanetContext';

function FilterForm() {
  const { filters, setFilters } = useContext(PlanetContext);

  const {
    filterByName: { name },
    filterByNumericValues: [{ column, comparison, value }],
  } = filters;

  function handleChange({ target }) {
    if (target.id === 'name') {
      setFilters({ ...filters, filterByName: { [target.id]: target.value } });
    }
    if (target.id === 'column') {
      setFilters({
        ...filters,
        filterByNumericValues: [{ column: target.value, comparison, value }],
      });
    }
    if (target.id === 'comparison') {
      setFilters({
        ...filters,
        filterByNumericValues: [{ column, comparison: target.value, value }],
      });
    }
    if (target.id === 'value') {
      setFilters({
        ...filters,
        filterByNumericValues: [{ column, comparison, value: target.value }],
      });
    }
  }

  function handleClick() {

  }

  return (
    <form>
      <label htmlFor="filterByName">
        <input
          type="text"
          id="name"
          name="filterByName"
          value={ name }
          onChange={ (e) => handleChange(e) }
          data-testid="name-filter"
        />
      </label>
      <label htmlFor="column">
        <select
          id="column"
          value={ column }
          onChange={ (e) => handleChange(e) }
          data-testid="column-filter"
        >
          <option value="">column filter</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          id="comparison"
          value={ comparison }
          onChange={ (e) => handleChange(e) }
          data-testid="comparison-filter"
        >
          <option value="">comparison filter</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="filterByNumericValues">
        <input
          type="number"
          id="value"
          name="filterByNumericValues"
          value={ value }
          onChange={ (e) => handleChange(e) }
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        onClick={ () => handleClick() }
        data-testid="button-filter"
      >
        Filter
      </button>
    </form>
  );
}

export default FilterForm;

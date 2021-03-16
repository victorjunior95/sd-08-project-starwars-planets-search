import React, { useContext } from 'react';
import PlanetContext from '../contexts/PlanetContext';

function FilterByColumn() {
  const { filters, setFilters } = useContext(PlanetContext);

  const {
    filterByColumnForm: [{ column, comparison, value }],
    filterByNumericValues,
  } = filters;

  function handleChangeByColumn({ target }) {
    if (target.id === 'column') {
      setFilters({
        ...filters,
        filterByColumnForm: [{ column: target.value, comparison, value }],
      });
    }
    if (target.id === 'comparison') {
      setFilters({
        ...filters,
        filterByColumnForm: [{ column, comparison: target.value, value }],
      });
    }
    if (target.id === 'value') {
      setFilters({
        ...filters,
        filterByColumnForm: [{ column, comparison, value: target.value }],
      });
    }
  }

  function handleFilterClick() {
    if (column && comparison && value) {
      setFilters({
        ...filters,
        filterByNumericValues: [...filterByNumericValues, { column, comparison, value }],
        filterByColumnForm: [{ column: '', comparison: '', value: '' }],
      });
    }
  }

  return (
    <div>
      <label htmlFor="column">
        <select
          id="column"
          value={ column }
          onChange={ (e) => handleChangeByColumn(e) }
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
          onChange={ (e) => handleChangeByColumn(e) }
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
          onChange={ (e) => handleChangeByColumn(e) }
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        onClick={ () => handleFilterClick() }
        data-testid="button-filter"
      >
        Filter
      </button>
    </div>
  );
}

export default FilterByColumn;

import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/Context';

export default function Table() {
  const { setFilterByName, setFilterNumericColumns } = useContext(StarWarsContext);
  const [column, setColumnFilters] = useState('population');
  const [comparison, setComparisonFilter] = useState('maior que');
  const [value, setValueFilter] = useState();

  function updateNumericFilters() {
    setFilterNumericColumns({
      column,
      comparison,
      value,
    });
  }
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ (e) => setFilterByName(e.target.value) }
      />
      <form>
        <select
          data-testid="column-filter"
          onChange={ (e) => setColumnFilters(e.target.value) }
          value={ column }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (e) => setComparisonFilter(e.target.value) }
          value={ comparison }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          onChange={ (e) => setValueFilter(e.target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ updateNumericFilters }
        >
          search
        </button>
      </form>
    </div>
  );
}

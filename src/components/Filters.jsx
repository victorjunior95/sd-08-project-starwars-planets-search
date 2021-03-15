import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/Context';

export default function Table() {
  const { setFilterByName,
    updateColumnFilters, filterList, removeColumnFilter } = useContext(StarWarsContext);
  const [column, setColumnFilters] = useState('population');
  const [comparison, setComparisonFilter] = useState('maior que');
  const [value, setValueFilter] = useState();
  const [columns, setColumnsOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  function updateNumericFilters() {
    const newOptions = columns.filter((option) => option !== column);
    setColumnFilters(newOptions[0]);
    setColumnsOptions(newOptions);
    updateColumnFilters(column, comparison, value);
  }

  function restoreNumericFilters(restoreColumn) {
    setColumnsOptions([...columns, restoreColumn]);
    removeColumnFilter(restoreColumn);
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
          {columns.map((option) => (<option key={ option }>{option}</option>))}
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
      <div>
        {filterList && filterList.map((filter) => (
          <div key={ filter.column } data-testid="filter">
            {filter.column}
            {' '}
            {filter.comparison}
            {' '}
            {filter.value}
            <button
              type="button"
              onClick={ () => restoreNumericFilters(filter.column) }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

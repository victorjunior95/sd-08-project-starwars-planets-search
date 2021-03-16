import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filtros() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const filterByNumberInitial = {
    column: filters.columnValues[0],
    comparison: 'maior que',
    value: '',
  };

  const [filterByNumber, setFilterByNumber] = useState(filterByNumberInitial);

  function handleClick() {
    const columnValues = filters.columnValues
      .filter((col) => col !== filterByNumber.column);
    console.log(columnValues);
    setFilters({
      ...filters,
      columnValues,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        filterByNumber,
      ],
    });
    setFilterByNumber({
      column: filters.columnValues[0],
      comparison: 'maior que',
      value: '',
    });
  }

  function numberFilter() {
    return (
      <form>
        <select
          className="form-select"
          value={ filterByNumber.column }
          data-testid="column-filter"
          onChange={ (e) => setFilterByNumber(
            {
              ...filterByNumber,
              column: e.target.value,
            },
          ) }
        >
          { filters.columnValues.map((col, index) => (
            <option
              key={ index }
              value={ col }
            >
              { col }
            </option>))}
        </select>
        <select
          className="form-select"
          data-testid="comparison-filter"
          value={ filterByNumber.comparison }
          onChange={ (e) => setFilterByNumber(
            {
              ...filterByNumber,
              comparison: e.target.value,
            },
          ) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ filterByNumber.value }
          onChange={ (e) => setFilterByNumber(
            {
              ...filterByNumber,
              value: e.target.value,
            },
          ) }
        />
        <button type="button" data-testid="button-filter" onClick={ handleClick }>
          Filtrar
        </button>
      </form>
    );
  }

  return (
    <div>
      <input
        type="text"
        value={ filters.filterByName.name }
        data-testid="name-filter"
        onChange={ (e) => setFilters(
          { ...filters, filterByName: { name: e.target.value } },
        ) }
      />
      { numberFilter() }
    </div>
  );
}

export default Filtros;

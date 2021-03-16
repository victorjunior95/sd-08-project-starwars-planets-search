import React, { useContext, useState } from 'react';

import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

function Filters() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [numberForComparison, setNumberForComparison] = useState('');
  const [orderColumn, setOrderColumn] = useState('name');
  const [orderType, setOrderType] = useState('');

  const { filters, setFilters } = useContext(StarWarsPlanetsContext);
  const { name } = filters.filterByName;

  function addFilter() {
    const arrayOfFilters = filters.filterByNumericValues;
    const numericValuesObject = {
      column: columnFilter,
      comparison: comparisonFilter,
      value: numberForComparison,
    };
    arrayOfFilters.push(numericValuesObject);
    setFilters({
      ...filters,
      filterByNumericValues: arrayOfFilters,
    });
    const columnOptions = document.querySelectorAll('select')[0];
    const columnOptionsArray = [...columnOptions];
    const selectedColumn = columnOptionsArray
      .find((option) => option.value === columnFilter);
    if (selectedColumn.nextSibling) {
      setColumnFilter(selectedColumn.nextSibling.value);
    }
    columnOptions.removeChild(selectedColumn);
    setNumberForComparison('');
  }

  function removeFilter(event, index) {
    const arrayOfFilters = filters.filterByNumericValues;
    const filterType = arrayOfFilters[index].column;
    arrayOfFilters.splice(index, 1);
    setFilters({
      ...filters,
      filterByNumericValues: arrayOfFilters,
    });
    const option = document.createElement('option');
    option.value = filterType;
    option.innerText = filterType;
    const columnOptions = document.querySelectorAll('select')[0];
    columnOptions.appendChild(option);
  }

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        value={ name }
        onChange={ (e) => setFilters({ ...filters,
          filterByName: { name: e.target.value },
        }) }
      />
      <br />
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ (e) => setColumnFilter(e.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ (e) => setComparisonFilter(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        placeholder="Número"
        value={ numberForComparison }
        onChange={ (e) => setNumberForComparison(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addFilter }
      >
        Adicionar
      </button>
      <ul>
        {filters.filterByNumericValues.map((filter, index) => (
          <li key={ filter.column } data-testid="filter">
            {`Filtro: ${filter.column} ${filter.comparison} ${filter.value}`}
            <button
              type="button"
              onClick={ (e) => removeFilter(e, index) }
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <select
        data-testid="column-sort"
        value={ orderColumn }
        onChange={ (e) => setOrderColumn(e.target.value) }
      >
        <option value="name">name</option>
        <option value="population">population</option>
        <option value="terrain">terrain</option>
        <option value="climate">climate</option>
        <option value="gravity">gravity</option>
        <option value="diameter">diameter</option>
        <option value="orbital_period">orbital_period</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <label htmlFor="ASC">
        Ascendente
        <input
          type="radio"
          id="ASC"
          name="order"
          value="ASC"
          data-testid="column-sort-input-asc"
          onClick={ () => setOrderType('ASC') }
        />
      </label>
      <label htmlFor="DESC">
        Descendente
        <input
          type="radio"
          id="DESC"
          name="order"
          value="DESC"
          data-testid="column-sort-input-desc"
          onClick={ () => setOrderType('DESC') }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setFilters({
          ...filters, order: { column: orderColumn, sort: orderType },
        }) }
      >
        Ordenar
      </button>
    </form>
  );
}

export default Filters;

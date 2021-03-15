import React, { useContext, useState } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';
import './Header.css';

function inputNameHandle(filtersState, setFilter, { target }) {
  const { value } = target;
  const responseObj = {
    ...filtersState,
    filters: {
      ...filtersState.filters,
      filterByName: {
        ...filtersState.filters.filterByName,
        name: value,
      },
    },
  };
  setFilter(responseObj);
}

export default function Header() {
  const [columnFilter, setColumnFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  });
  const { column, comparison, value } = columnFilter;

  const { filtersState, setFilter } = useContext(PlanetsContext);
  const { filters: { filterByName }, filterList } = filtersState;
  return (
    <header>
      <label htmlFor="inputName">
        <input
          data-testid="name-filter"
          name="inputName"
          type="text"
          value={ filterByName.name }
          onChange={ (e) => inputNameHandle(filtersState, setFilter, e) }
        />
      </label>

      <label htmlFor="columnFilter">
        <select
          data-testid="column-filter"
          name="columnFilter"
          value={ column }
          onChange={ (e) => setColumnFilter({
            ...columnFilter,
            column: e.target.value,
          }) }
        >
          {
            filterList.map(({ name, id }) => (
              <option
                key={ `ReactKeyOpt${id}` }
                value={ `${id}` }
              >
                {name}
              </option>
            ))
          }
        </select>
      </label>

      <label
        data-testid="comparison-filter"
        htmlFor="comparisonFilter"
      >
        <select
          name="comparisonFilter"
          value={ comparison }
          onChange={ (e) => setColumnFilter({
            ...columnFilter,
            comparison: e.target.value,
          }) }
        >
          <option value="greaterFilter">Maior que</option>
          <option value="smallerFilter">Menor que</option>
          <option value="equalFilter">Igual a</option>
        </select>
      </label>

      <label htmlFor="valueFilter">
        <input
          data-testid="value-filter"
          type="number"
          name="valueFilter"
          id="valueFilter"
          value={ value }
          onChange={ (e) => setColumnFilter({
            ...columnFilter,
            value: e.target.value,
          }) }
        />
      </label>

      <button
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>

      <label htmlFor="selectOrder">
        <span>Ordenar</span>
        <select name="selectOrder">
          <option value="populationOrder">Population</option>
          <option value="orbitalOrder">Orbital Period</option>
          <option value="rotationOrder">Rotation Period</option>
        </select>
      </label>

      <label htmlFor="ascendent">
        <span>Ascendente</span>
        <input type="radio" name="ascendent" />
      </label>
      <label htmlFor="Descendent">
        <span>Descendente</span>
        <input type="radio" name="Descendent" />
      </label>

      <div>
        <span>Filter1</span>
        <button type="button">x</button>
        <span>Filter2</span>
        <button type="button">x</button>
      </div>
    </header>
  );
}

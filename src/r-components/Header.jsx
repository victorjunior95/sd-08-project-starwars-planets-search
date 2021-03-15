import React, { useContext } from 'react';
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
  const { filtersState, setFilter } = useContext(PlanetsContext);
  const { filters: { filterByName } } = filtersState;
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

      <label htmlFor="selectNumberFilter">
        <select name="selectNumberFilter">
          <option value="populationFilter">Population</option>
          <option value="orbitalFilter">Orbital Period</option>
          <option value="rotationFilter">Rotation Period</option>
        </select>
      </label>

      <label htmlFor="selectOperationFilter">
        <select name="selectOperationFilter">
          <option value="greaterFilter">Maior que</option>
          <option value="smallerFilter">Menor que</option>
          <option value="equalFilter">Igual a</option>
        </select>
      </label>

      <button type="button">Filtrar</button>

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

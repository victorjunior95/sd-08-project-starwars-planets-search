import React, { useContext, useState } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';
import './Header.css';

export default function Header() {
  return (
    <header>
      <label htmlFor="inputName">
        <input
          data-testid="name-filter"
          name="inputName"
          type="text"
        />
      </label>

      <label htmlFor="columnFilter">
        <select
          data-testid="column-filter"
          name="columnFilter"
        >
          <option>dummie</option>
        </select>
      </label>

      <label
        data-testid="comparison-filter"
        htmlFor="comparisonFilter"
      >
        <select
          name="comparisonFilter"
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

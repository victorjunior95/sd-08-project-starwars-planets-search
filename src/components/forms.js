import React, { useContext } from 'react';
import PlanetsStarWarsContext from '../context/PlanetsStarWarsContext';

function Forms() {
  const { handleChange, clickButton,
    column, filterNumeric, buttonSort } = useContext(PlanetsStarWarsContext);

  return (
    <form>
      <label htmlFor="filterByName">
        Filter Name:
        <input
          type="text"
          name="filterByName"
          onChange={ (event) => handleChange(event) }
          data-testid="name-filter"
        />
      </label>
      <select
        data-testid="column-filter"
        name="column"
        value={ filterNumeric.column }
        onChange={ (event) => handleChange(event) }
      >
        {column.map((option, index) => <option key={ index }>{option}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ filterNumeric.comparison }
        onChange={ (event) => handleChange(event) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        value={ filterNumeric.value }
        onChange={ (event) => handleChange(event) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => clickButton() }
      >
        Filtrar
      </button>
      <select
        name="order"
        onChange={ (event) => handleChange(event) }
        data-testid="column-sort"
      >
        <option>Name</option>
        <option>population</option>
        <option>orbital_period</option>
      </select>
      <label htmlFor="asc">
        ASC
        <input
          type="radio"
          name="sort"
          value="asc"
          onChange={ (event) => handleChange(event) }
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="desc">
        DESC
        <input
          type="radio"
          name="sort"
          value="desc"
          onChange={ (event) => handleChange(event) }
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        type="button"
        onClick={ () => buttonSort() }
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </form>
  );
}

export default Forms;

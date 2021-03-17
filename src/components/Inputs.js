import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Inputs() {
  const {
    filters: { filtersByName }, handleChange, numberFilter, handleClick,
  } = useContext(PlanetsContext);

  const dropDownColumn = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const dropDownRange = ['maior que', 'menor que', 'igual a'];

  return (
    <>
      <input
        data-testid="name-filter"
        name="name"
        onChange={ handleChange }
        placeholder="Search name"
        type="text"
        value={ filtersByName }
      />

      <select data-testid="column-filter" name="data" onChange={ handleChange }>
        <option label="Column" />
        { dropDownColumn.map((data) => (
          <option key={ data } value={ data }>
            { data }
          </option>
        )) }
      </select>

      <select data-testid="comparison-filter" name="range" onChange={ handleChange }>
        <option label="Comparison" />
        { dropDownRange.map((range) => (
          <option key={ range } value={ range }>
            { range }
          </option>
        )) }
      </select>

      <input
        data-testid="value-filter"
        onChange={ handleChange }
        placeholder="Value"
        name="number"
        type="text"
        value={ numberFilter.value }
      />

      <button
        data-testid="button-filter"
        onClick={ handleClick }
        type="button"
      >
        Search
      </button>
    </>
  );
}

export default Inputs;

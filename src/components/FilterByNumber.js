import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByNumber() {
  const {
    inputsValues: {
      column,
      comparison,
      value,
    },
    function: {
      handleColumn,
      handleComparison,
      handleValue,
      addFilter,
    },
  } = useContext(PlanetsContext);

  return (
    <>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ handleColumn }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ handleComparison }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ handleValue }
      />
      <button
        data-testid="button-filter"
        onClick={ addFilter }
        type="button"
      >
        Adicionar Filtro
      </button>
    </>
  );
}

export default FilterByNumber;

import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function FilterSelect() {
  const { setFilters, filters } = useContext(PlanetsContext);
  const [localFilter, setLocalFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const heandleChange = ({ target: { value, name } }) => {
    setLocalFilter({ ...localFilter, [name]: value });
  };

  const heandleClick = () => {
    setFilters({ ...filters, ...{ filterByNumericValues: [localFilter] } });
  };

  return (
    <>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ (event) => heandleChange(event) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ (event) => heandleChange(event) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>

      </select>
      <input
        onChange={ (event) => heandleChange(event) }
        data-testid="value-filter"
        type="number"
        name="value"
      />
      <button
        onClick={ () => heandleClick() }
        data-testid="button-filter"
        type="button"
        value="Filtrar"
      >
        Filtrar
      </button>
    </>
  );
}

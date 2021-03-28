import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function NumericFilterForm() {
  const { setNumFilter } = useContext(PlanetContext);
  // const [{ column, comparison, value }] = numFilter;

  const [numericFilter, setNumericFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  function handleChange({ target }) {
    setNumericFilter({
      ...numericFilter,
      [target.name]: target.value,
    });
  }

  function handleClick() {
    setNumFilter([
      numericFilter,
    ]);
  }
  // console.log(numFilter);

  return (
    <form>
      <select name="column" id="" data-testid="column-filter" onChange={ handleChange }>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        id=""
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        name="value"
        value={ numericFilter.value }
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </form>
  );
}

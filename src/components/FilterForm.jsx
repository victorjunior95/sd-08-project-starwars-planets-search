import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function FilterForm() {
  const { numFilter, setNumFilter } = useContext(StarWarsContext);

  console.log(numFilter);

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
      ...numFilter,
      numericFilter,
    ]);
  }
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
        name="value"
        value={ numericFilter.value }
        type="number"
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

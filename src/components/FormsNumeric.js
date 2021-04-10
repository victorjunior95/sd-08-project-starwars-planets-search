import React, { useState, useContext } from 'react';
import StarsAppContext from '../context/StarsAppContext';

function FormsNumeric() {
  const { setNumFilter, numFilter } = useContext(StarsAppContext);
  const [numericFilter, setNumericFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const handleChange = ({ target }) => {
    setNumericFilter({
      ...numericFilter,
      [target.name]: target.value,
    });
  };
  const handleClik = () => {
    setNumFilter([...numFilter, numericFilter]);
  };

  return (
    <form>
      <label htmlFor="column-filter">
        <select data-testid="column-filter" name="column" onChange={ handleChange }>
          dropdown:
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleChange }
        >
          Maior Menor igual:
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Numero:
        <input
          type="number"
          name="value"
          value={ numericFilter.value }
          id="value-filter"
          data-testid="value-filter"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClik }
      >
        buscar

      </button>
    </form>
  );
}
export default FormsNumeric;

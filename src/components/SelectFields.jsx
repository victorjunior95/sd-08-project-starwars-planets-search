import React, { useContext } from 'react';
// import PropTypes, { shape } from 'prop-types';
import StarWarsContext from '../data/StarWarsContext';
import { firstSelector, secondSelector } from '../constants/index';

export default function SelectFields() {
  const { filters: { col, comp, val },
    filterByNumerics, handleInputs } = useContext(StarWarsContext);

  return (
    <fieldset>
      <label htmlFor="column-filter">
        <select
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
          value={ col }
          onChange={
            (e) => handleInputs(e, e.target.value, col, parseInt(val, 10))
          }
        >
          {firstSelector.map((option, i) => (
            <option key={ i } value={ option }>{option}</option>))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          name="comparison-filter"
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ comp }
          onChange={
            (e) => handleInputs(e, col, e.target.value, parseInt(val, 10))
          }
        >
          {secondSelector.map((option, i) => (
            <option key={ i } value={ option }>{option}</option>))}
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          name="value-filter"
          id="value-filter"
          data-testid="value-filter"
          value={ val }
          onChange={
            (e) => handleInputs(e, col, comp, parseInt(e.target.value, 10))
          }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ (e) => filterByNumerics(e, col, comp, val) }
      >
        Filtrar

      </button>
    </fieldset>
  );
}
// SelectFields.propTypes = {
//   data: PropTypes.arrayOf(shape({})),
// }.isRequired;

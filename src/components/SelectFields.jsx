import React, { useContext } from 'react';
// import PropTypes, { shape } from 'prop-types';
import StarWarsContext from '../data/StarWarsContext';
import { firstSelector, secondSelector } from '../constants/index';

export default function SelectFields() {
  const { filters: { filterByNumericValues: [{ column, comparison, value }] },
    filterQueries } = useContext(StarWarsContext);
  return (
    <fieldset>
      <label htmlFor="column-filter">
        <select
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
          value={ column }
          onChange={
            (e) => filterQueries(e.target.value, comparison, parseInt(value, 10))
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
          value={ comparison }
          onChange={ (e) => filterQueries(column, e.target.value, parseInt(value, 10)) }
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
          value={ value }
          onChange={
            (e) => filterQueries(column, comparison, parseInt(e.target.value, 10))
          }
        />
      </label>
      <button type="button" data-testid="button-filter">Filtrar</button>
    </fieldset>
  );
}
// SelectFields.propTypes = {
//   data: PropTypes.arrayOf(shape({})),
// }.isRequired;

import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

export default function Header() {
  const { filterbyName, getFilterbyName, filter,
    Filter, getFilterComparison,
    getFilterColumn, getFilterNumber /* isFilted */ } = useContext(SWContext);
  const colList = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  console.log(filter.filters.filterByNumericValues);
  // console.log(filter.filters.filterByNumericValues.some((v) => v.column === 'population'));
  return (
    <div>
      <input
        type="text"
        value={ filterbyName }
        onChange={ (e) => { getFilterbyName(e.target.value); } }
        data-testid="name-filter"
      />
      <select
        data-testid="column-filter"
        id="column-filter"
        name="column-filter"
        onChange={ (e) => getFilterColumn(e.target.value) }
      >
        {/* {console.log(isFilted)} */}
        {colList.map((column, index) => {
          if (filter.filters.filterByNumericValues.every((v) => v.column !== column)) {
            return (
              <option
                key={ index }
                value={ column }
              >
                {column}
              </option>
            );
          }
          return '';
        })}

        {/* <option
          disabled={ filter.filters.filterByNumericValues.some((v) => v.column === 'orbital_period') }
          value="orbital_period"
        >
          orbital_period
        </option>
        <option
          disabled={ filter.filters.filterByNumericValues.some((v) => v.column === 'diameter') }
          value="diameter"
        >
          diameter
        </option>
        <option
          disabled={ filter.filters.filterByNumericValues.some((v) => v.column === 'rotation_period') }
          value="rotation_period"
        >
          rotation_period
        </option>
        <option
          disabled={ filter.filters.filterByNumericValues.some((v) => v.column === 'surface_water') }
          value="surface_water"
        >
          surface_water
        </option> */}
      </select>
      <select
        data-testid="comparison-filter"
        id="comparison-filter"
        name="comparison-filter"
        onChange={ (e) => getFilterComparison(e.target.value) }
        required
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => getFilterNumber(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => Filter() }
      >
        Adicionar

      </button>
    </div>
  );
}

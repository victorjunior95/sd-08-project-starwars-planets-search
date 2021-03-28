import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

export default function Header() {
  const { filterbyName, getFilterbyName, filter,
    Filter, getFilterComparison,
    getFilterColumn, getFilterNumber, deleteFilter } = useContext(SWContext);
  const colList = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  // console.log(filter.filters.filterByNumericValues);
  const numberalFilterList = () => ((
    <ol>
      {filter.filters.filterByNumericValues.map((criteriun, index) => (
        <li key={ criteriun.column }>
          {criteriun.column}

          {criteriun.comparison}

          {criteriun.value}

          <button
            type="button"
            data-testid="filter"
            onClick={ () => { deleteFilter(index); } }
          >
            X
          </button>

        </li>
      ))}
    </ol>
  ));
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
        onClick={ (e) => getFilterColumn(e.target.value) }
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
      {filter.filters.filterByNumericValues.length > 0
      && numberalFilterList()}
    </div>
  );
}

import React, { useContext } from 'react';
import { APIContext } from '../services/context';

// import { Container } from './styles';

function ActiveFilters() {
  const { onClickRemoveFilter, filters } = useContext(APIContext);
  return (
    <label htmlFor="active-filters">
      <form>
        <h3>Active Filters</h3>
        <ul>
          { filters.filterByNumericValues.length > 0
              && filters.filterByNumericValues.map((filter) => (
                <li data-testid="filter" key={ filter.column }>
                  { `${filter.column} ${filter.comparison} ${filter.value} ` }
                  <button
                    type="button"
                    id={ filter.column }
                    onClick={ (event) => onClickRemoveFilter(event.target.id) }
                  >
                    x
                  </button>
                </li>))}
        </ul>
      </form>

    </label>
  );
}

export default ActiveFilters;

import React from 'react';

import Planets from '../context/PlanetsContext';

function Filters() {
  const { store: { filters, setFilters } } = React.useContext(Planets);
  const { filterByNumericValues } = filters;

  function removeFilter(filter) {
    const newArray = filterByNumericValues.map((item) => item.column !== filter.column);
    // setFilters({ ...filters, filterByNumericValues: newArray });
  }

  return (
    <div>
      {filterByNumericValues.length > 0 && (
        filterByNumericValues.map((filter, index) => (
          <span key={ index } data-testid="filter">
            {filter.column}
            <button type="button" onClick={ () => removeFilter(filter) }>x</button>
          </span>))
      )}
    </div>
  );
}

export default Filters;

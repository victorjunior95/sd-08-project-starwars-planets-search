import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function NumericFilters() {
  const { filterByNumericValues, removeNumericFilter } = useContext(PlanetsContext);
  return (
    <>
      {
        filterByNumericValues.map((filter) => {
          const { column, comparison, value } = filter;
          const textFilter = `${column} ${comparison} ${value}`;
          return (
            <section key={ textFilter }>
              <span>{ textFilter }</span>
              <button type="button" onClick={ removeNumericFilter }>X</button>
            </section>
          );
        })
      }
    </>
  );
}

export default NumericFilters;

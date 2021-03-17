import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const { setFilters } = useContext(PlanetsContext);

  function byName(event) {
    setFilters(event.target.value);
  }

  return (
    <section>
      <label htmlFor="filterByName">
        <input
          name="filterByName"
          type="text"
          onChange={ byName }
          data-testid="name-filter"
          id="inputSearch"
        />
      </label>
    </section>
  );
}

export default Filter;

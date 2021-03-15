import React, { useContext } from 'react';

import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

function Filters() {
  const { filters, setFilters } = useContext(StarWarsPlanetsContext);
  const { name } = filters.filterByName;
  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        value={ name }
        onChange={ (e) => setFilters({ ...filters,
          filterByName: { name: e.target.value },
        }) }
      />
    </section>
  );
}

export default Filters;

import React, { useContext, useEffect } from 'react';
import { APIContext } from '../services/context';

export default function InputFilter() {
  const {
    filters,
    setFilters,
    filteredPlanetsByName,
  } = useContext(APIContext);
  const { filterByName: { name } } = filters;

  const onChangeFiltersName = (e) => {
    setFilters({
      ...filters,
      filterByName: {
        name: e.target.value,
      },
    });
  };

  useEffect(() => {
    filteredPlanetsByName(name);
  }, [name]);

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Search by Name"
        value={ name }
        onChange={ onChangeFiltersName }
      />
    </form>
  );
}

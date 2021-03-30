import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function FilterByNamePlanet() {
  const { setFilters, filters } = useContext(PlanetsContext);

  const handleFilter = (value) => {
    const newState = { ...filters, ...{ filterByName: { name: value } } };
    setFilters(newState);
  };

  return (
    <label htmlFor="filter">
      Filter By Name:
      <input
        id="filter"
        data-testid="name-filter"
        type="text"
        onChange={ ({ target: { value } }) => handleFilter(value) }
      />
    </label>
  );
}

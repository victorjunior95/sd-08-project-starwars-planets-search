import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContex';

const FilterBar = () => {
  const { setFilters } = useContext(StarWarsContext);
  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ ({ target: { value } }) => (
        setFilters({ filterByName: { name: value } })
      ) }
    />
  );
};

export default FilterBar;

import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Filter() {
  const { setFilterName,
    filters: { filterByName: { name } } } = useContext(FilterContext);

  return (
    <label htmlFor="name">
      Name:
      <input
        data-testid="name-filter"
        type="text"
        id="name"
        value={ name }
        onChange={ ({ target }) => setFilterName(target.value) }
      />
    </label>
  );
}

export default Filter;

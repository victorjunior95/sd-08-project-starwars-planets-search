import React, { useContext } from 'react';
import MyDataContext from '../context/Context';

function Filter() {
  const { filters, setFilters } = useContext(MyDataContext);
  const { filterByName: { name } } = filters;

  const changeNameFilter = (event) => {
    setFilters({ filterByName: { name: event.target.value } });
  };

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ name }
      onChange={ changeNameFilter }
    />
  );
}

export default Filter;

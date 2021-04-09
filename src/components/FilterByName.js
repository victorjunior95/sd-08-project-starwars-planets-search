import React, { useContext } from 'react';
import { APIContext } from '../services/context';

export default function InputFilter() {
  const {
    filters,
    setFilters,
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

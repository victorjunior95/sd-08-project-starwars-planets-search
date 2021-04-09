import React, { useContext } from 'react';
import { APIContext } from '../services/context';

// import { Container } from './styles';

function SortFilter() {
  const {
    filters, orderFilterValues, setFilters } = useContext(APIContext);

  function setOrderFilter() {
    setFilters({ ...filters, order: { ...orderFilterValues } });
  }

  return (
    <button
      data-testid="column-sort-button"
      onClick={ (event) => { event.preventDefault(); setOrderFilter(); } }
      type="submit"
    >
      Sort
    </button>
  );
}

export default SortFilter;

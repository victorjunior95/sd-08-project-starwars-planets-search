import React, { useContext, useState } from 'react';
import { APIContext } from '../services/context';

// import { Container } from './styles';
function SortFilter() {
  const {
    filters, setFilters } = useContext(APIContext);
  const [filterOrder, setFilterOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const { column, sort } = filterOrder;

  const columns = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'terrain',
    'surface_water',
    'population',
  ];

  const onChangeOrderFilter = ({ target }) => {
    setFilterOrder({
      ...filterOrder,
      [target.name]: target.value,
    });
  };

  const handleBtnSort = () => {
    setFilters({
      ...filters,
      order: {
        column,
        sort,
      },
    });
  };

  return (
    <>
      <select
        value={ column }
        name="column"
        onChange={ onChangeOrderFilter }
        data-testid="column-sort"
      >
        {columns.map((columnOption) => (
          <option key={ columnOption }>{columnOption}</option>
        ))}
      </select>
      <span>
        <label htmlFor="ASC">
          Ascendent
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            value="ASC"
            id="ASC"
            name="sort"
            onChange={ onChangeOrderFilter }
          />
        </label>
        <label htmlFor="DESC">
          Descendent
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            value="DESC"
            id="DESC"
            onChange={ onChangeOrderFilter }
            name="sort"
          />
        </label>
      </span>
      <button
        data-testid="column-sort-button"
        onClick={ handleBtnSort }
        type="submit"
      >
        Sort
      </button>
    </>
  );
}

export default SortFilter;

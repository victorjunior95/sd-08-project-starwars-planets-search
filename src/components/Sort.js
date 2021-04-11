import React, { useContext, useState } from 'react';
import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

function Sort() {
  const {
    filters,
    setFilters,
  } = useContext(StarWarsPlanetsContext);

  const [columnSort, setColumnSort] = useState();
  const [sortType, setSortType] = useState();
  const sortColumnsOptions = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url',
  ];

  const toSort = () => {
    setFilters({
      ...filters,
      order: {
        column: columnSort,
        sort: sortType,
      },
    });
  };

  return (
    <form className="sort">
      <select
        data-testid="column-sort"
        onChange={ ({ target }) => {
          setColumnSort(target.value);
        } }
      >
        {sortColumnsOptions.map((columnOption) => (
          <option
            value={ columnOption }
            key={ columnOption }
          >
            { columnOption }
          </option>
        ))}
      </select>

      <div>
        <label htmlFor="ASC">
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            id="ASC"
            value="ASC"
            name="order"
            onChange={ ({ target }) => {
              setSortType(target.value);
            } }
          />
        </label>
        <label htmlFor="DESC">
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            id="DESC"
            value="DESC"
            name="order"
            onChange={ ({ target }) => {
              setSortType(target.value);
            } }
          />
        </label>
      </div>

      <button
        type="submit"
        data-testid="column-sort-button"
        onClick={ () => toSort() }
      >
        Ordenar
      </button>
    </form>
  );
}

export default Sort;

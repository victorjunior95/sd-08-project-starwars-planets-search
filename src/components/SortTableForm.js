import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function SortTableForm() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const [sortBy, setSortBy] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const { column, sort } = sortBy;

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

  const handleClick = () => {
    setFilters({
      ...filters,
      order: {
        column,
        sort,
      },
    });
  };

  const handleChange = ({ target }) => {
    setSortBy({
      ...sortBy,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <select
        value={ column }
        name="column"
        onChange={ handleChange }
        data-testid="column-sort"
      >
        {columns.map((columnOption) => (
          <option key={ columnOption }>{columnOption}</option>
        ))}
      </select>
      <span>
        <label htmlFor="ASC">
          Ascendente
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            value="ASC"
            id="ASC"
            name="sort"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="DESC">
          Descendente
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            value="DESC"
            id="DESC"
            onChange={ handleChange }
            name="sort"
          />
        </label>
      </span>
      <button type="button" data-testid="column-sort-button" onClick={ handleClick }>
        Ordem Alfabética
      </button>
    </div>
  );
}

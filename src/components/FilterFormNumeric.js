import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function FilterFormNumeric() {
  const [filterValues, setFilterValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const { filters, setFilters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;
  const { column, comparison, value } = filterValues;
  const columns = [
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
    'population',
  ];
  const comparisons = ['maior que', 'menor que', 'igual a'];

  const handleChange = ({ target }) => {
    setFilterValues({
      ...filterValues,
      [target.name]: target.value,
    });
  };

  const handleFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: {
        ...filterByNumericValues,
        ...filterValues,
      },
    });
  };

  return (
    <>
      <select
        value={ column }
        name="column"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        {columns.map((columnOption) => (
          <option key={ columnOption }>{columnOption}</option>
        ))}
      </select>
      <select
        value={ comparison }
        name="comparison"
        onChange={ handleChange }
        data-testid="comparison-filter"
      >
        {comparisons.map((comparisonOption) => (
          <option key={ comparisonOption }>{comparisonOption}</option>
        ))}
      </select>
      <input
        type="number"
        value={ value }
        name="value"
        data-testid="value-filter"
        placeholder="0"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilter }
      >
        Filter
      </button>
    </>
  );
}

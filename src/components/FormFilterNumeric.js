import React, { useContext, useState } from 'react';
import ContextPlanets from '../context/StarWarsContext';

export default function FormFilterNumeric() {
  const [filterValues, setFilterValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const { filters, setFilters } = useContext(ContextPlanets);
  const { filterByNumericValues } = filters;
  const { column, comparison, value } = filterValues;
  const options = [
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
        {options.map((option) => (
          <option key={ option }>{option}</option>
        ))}
      </select>
      <select
        value={ comparison }
        name="comparison"
        onChange={ handleChange }
        data-testid="comparison-filter"
      >
        {comparisons.map((comparisonOpt) => (
          <option key={ comparisonOpt }>{comparisonOpt}</option>
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

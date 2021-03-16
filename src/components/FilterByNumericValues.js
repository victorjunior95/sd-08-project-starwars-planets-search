import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumericValues() {
  const { filters, setFilters } = useContext(StarWarsContext);

  const [filterValues, setFilterValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

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

  const handleChange = ({ target: { name, value: valor } }) => {
    setFilterValues({
      ...filterValues,
      [name]: valor,
    });
  };

  const handleClick = () => {
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
        {
          columns.map((columnOpt, index) => (
            <option key={ index }>{ columnOpt }</option>
          ))
        }
      </select>

      <select
        value={ comparison }
        name="comparison"
        onChange={ handleChange }
        data-testid="comparison-filter"
      >
        {
          comparisons.map((comparisonOpt, index) => (
            <option key={ index }>{ comparisonOpt }</option>
          ))
        }
      </select>

      <input
        type="number"
        value={ value }
        name="value"
        onChange={ handleChange }
        data-testid="value-filter"
      />

      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </>
  );
}

export default FilterByNumericValues;

import React, { useState, useContext, useEffect } from 'react';
import tableContext from '../context/tableContext';

export default function NumericForm() {
  const { setFilters, filters } = useContext(tableContext);
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [numericFilter, setNumericFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const comparisonSelect = ['maior que', 'menor que', 'igual a'];

  const { value, column, comparison } = numericFilter;
  const { filterByNumericValues } = filters;

  const handleInput = ({ target }) => {
    setNumericFilter({ ...numericFilter, [target.name]: target.value });
  };

  const handleClick = async () => {
    setColumns(columns.filter((option) => option !== column));
    setFilters({ ...filters,
      filterByNumericValues: [...filterByNumericValues, numericFilter] });
    setNumericFilter({ ...numericFilter, column: columns[0] });
  };

  return (
    <div>
      <label htmlFor="columns">
        selecione:
        <select
          name="column"
          data-testid="column-filter"
          onChange={ handleInput }
        >
          {columns.map((name) => <option value={ name } key={ name }>{ name }</option>)}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          value={ comparison }
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleInput }
        >
          {comparisonSelect.map(
            (item) => <option key={ item }>{item}</option>,
          )}
        </select>
      </label>
      <label htmlFor="value">
        <input
          name="value"
          value={ value }
          data-testid="value-filter"
          type="number"
          onChange={ handleInput }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

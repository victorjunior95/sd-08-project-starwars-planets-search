import React, { useState, useContext } from 'react';
import SWContext from '../context/SWContext';

const COMPARISON_OPTIONS = ['maior que', 'menor que', 'igual a'];

function SelectForm() {
  const { filters, setFilters, columns, setColumns } = useContext(SWContext);
  const [filterOptions, setFilterOptions] = useState(
    { column: '', comparison: '', value: 0 },
  );

  const { filterByNumericValues } = filters;
  const { column, comparison, value } = filterOptions;

  function handleChange({ target }) {
    setFilterOptions({
      ...filterOptions,
      [target.name]: target.value,
    });
  }

  function handleClick() {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          ...filterOptions,
        }],
    });
    setColumns(columns.filter((selectedColumn) => column !== selectedColumn));
  }
  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        value={ column }
        onChange={ handleChange }
      >
        {columns.map((option, index) => (
          <option key={ index }>{option}</option>
        ))}
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ handleChange }
      >
        {COMPARISON_OPTIONS.map((option, index) => (
          <option key={ index }>{option}</option>
        ))}
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ handleChange }
      />
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default SelectForm;

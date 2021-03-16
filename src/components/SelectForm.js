import React, { useState, useContext } from 'react';
import SWContext from '../context/SWContext';

const COMPARISON_OPTIONS = ['maior que', 'menor que', 'igual a'];
const COLUMN_OPTIONS = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

function SelectForm() {
  const { filters, setFilters } = useContext(SWContext);
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
      filterByNumericValues: {
        ...filterByNumericValues,
        ...filterOptions,
      },
    });
  }

  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        value={ column }
        onChange={ handleChange }
      >
        {COLUMN_OPTIONS.map((option, index) => (
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
      >
        Filtrar
      </button>
    </div>
  );
}

export default SelectForm;

import React, { useState, useContext } from 'react';
import FilterContext from '../context/FilterContext';

const NUMERIC_VALUES = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function Filter() {
  const [column, setColumn] = useState(NUMERIC_VALUES[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState();

  const { setFilterName,
    filters: { filterByName: { name } },
    setFilterByNumericValues } = useContext(FilterContext);

  return (
    <>
      <label htmlFor="name">
        Nome:
        <input
          data-testid="name-filter"
          type="text"
          id="name"
          value={ name }
          onChange={ ({ target }) => setFilterName(target.value) }
        />
      </label>
      <label htmlFor="column">
        Coluna
        <select
          data-testid="column-filter"
          id="column"
          name="column"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          { NUMERIC_VALUES.map(
            (columnOpt) => (
              <option value={ columnOpt } key={ columnOpt }>{ columnOpt }</option>
            ),
          )}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          id="comparison"
          data-testid="comparison-filter"
          name="comparison"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="numeric_value">
        <input
          type="number"
          id="numeric_value"
          data-testid="value-filter"
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFilterByNumericValues(column, comparison, value) }
      >
        Filtro
      </button>
    </>
  );
}

export default Filter;

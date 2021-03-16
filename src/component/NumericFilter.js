import React, { useContext, useState } from 'react';
import Context from '../context';

const filterOptions = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];
function NumericFilter() {
  const { filter, setFilter } = useContext(Context);
  const [column, setColumn] = useState(filterOptions[0]);
  const [comparison, setComparison] = useState('maiorQue');
  const [value, setValue] = useState('');
  const { filterByNumericValues } = filter;
  const handleClick = () => {
    setFilter({ ...filter,
      filterByNumericValues: filterByNumericValues
        ? [...filterByNumericValues, { column, comparison, value }]
        : [{ column, comparison, value }] });
  };
  return (
    <div>
      <label htmlFor="filter">
        Filtro:
        {' '}
        <select
          data-testid="column-filter"
          id="filter"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          {filterOptions.map((opt) => <option key={ opt }>{ opt }</option>)}
        </select>
      </label>
      <label htmlFor="comparison">
        Condição:
        {' '}
        <select
          data-testid="comparison-filter"
          id="comparison"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        Valor:
        {' '}
        <input
          type="number"
          data-testid="value-filter"
          id="value"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumericFilter;

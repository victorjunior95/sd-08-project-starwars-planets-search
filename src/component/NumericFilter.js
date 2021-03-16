import React, { useContext } from 'react';
import Context from '../context';

function NumericFilter() {
  const { filter, setFilter } = useContext(Context);
  const filterOptions = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  return (
    <div>
      <label htmlFor="filter">
        Filtro:
        {' '}
        <select data-testid="column-filter" id="filter">
          {filterOptions.map((opt) => <option key={ opt }>{ opt }</option>)}
        </select>
      </label>
      <label htmlFor="comparison">
        Condição:
        {' '}
        <select data-testid="comparison-filter" id="comparison">
          <option value="maiorQue">maior que</option>
          <option value="menorQue">menor que</option>
          <option value="igualA">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        Valor:
        {' '}
        <input type="number" data-testid="button-filter" id="value" />
      </label>
      <button type="button" data-testid="button-filter">Filtrar</button>
    </div>
  );
}

export default NumericFilter;

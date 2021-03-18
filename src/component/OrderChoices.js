import React, { useState } from 'react';
import { filterOptions } from '../services';

function OrderChoice() {
  const [columnSort, setColumnSort] = useState(filterOptions[0]);
  const [radioSort, setRadioSort] = useState('ASC');
  return (
    <section>
      <select
        data-testid="column-sort"
        value={ columnSort }
        onChange={ (e) => setColumnSort(e.target.value) }
      >
        {filterOptions.map((opt) => <option key={ opt }>{ opt }</option>)}
      </select>
      <div style={ { display: 'inline' } }>
        <label htmlFor="asc">
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            name="order"
            id="asc"
            value="ASC"
            checked={ radioSort === 'ASC' }
            onChange={ (e) => setRadioSort(e.target.value) }
          />
          Ascendente
        </label>
        <label htmlFor="desc">
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            name="order"
            id="desc"
            value="DESC"
            checked={ radioSort === 'DESC' }
            onChange={ (e) => setRadioSort(e.target.value) }
          />
          Descendente
        </label>
      </div>
      {' '}
      <button type="button" data-testid="column-sort-button">Ordenar</button>
    </section>
  );
}

export default OrderChoice;

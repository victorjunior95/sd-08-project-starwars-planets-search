import React, { useState } from 'react';
import theads from '../data/theads';

function FormOrder() {
  const [localOrder, setLocalOrder] = useState({ column: 'name', sort: 'ASC' });
  const handleChange = ({ target }) => {
    setLocalOrder({
      ...localOrder,
      [target.name]: target.value,
    });
  };

  return (
    <form>
      <label htmlFor="column">
        Ordem:
        <select
          onChange={ handleChange }
          name="column"
          data-testid="column-sort"
          value={ localOrder.column }
        >
          {theads.map((e, index) => <option key={ index }>{e}</option>)}
        </select>
      </label>
      <label htmlFor="sort">
        <input
          onChange={ handleChange }
          name="sort"
          value="ASC"
          type="radio"
        />
        ASC
        <input
          onChange={ handleChange }
          name="sort"
          value="DESC"
          type="radio"
        />
        DESC
      </label>

    </form>
  );
}

export default FormOrder;

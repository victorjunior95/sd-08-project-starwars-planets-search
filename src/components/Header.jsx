import React, { useContext } from 'react';
import ContextStars from '../context/ContextStar';

function Header() {
  const contexto = useContext(ContextStars);
  console.log(contexto.filters);
  return (
    <div>
      <input type="text" data-testid="name-filter" />
      <input type="text" data-testid="value-filter" />

      <select name="column" data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
      </select>

      <select name="comparison" data-testid="comparison-filter">
        <option value=">">maior que</option>
        <option value="<">menor que</option>
        <option value="===">igual a</option>
      </select>

      <input type="number" data-testid="value-filter" />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => console.log('clicked') }
      >
        Filtrar
      </button>
    </div>
  );
}
export default Header;

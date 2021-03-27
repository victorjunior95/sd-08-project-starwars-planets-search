import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

export default function Header() {
  const { filterbyName, getFilterbyName,
    Filter, getFilterComparison,
    getFilterColumn, getFilterNumber/* isFilted */ } = useContext(SWContext);
  return (
    <div>
      <input
        type="text"
        value={ filterbyName }
        onChange={ (e) => { getFilterbyName(e.target.value); } }
        data-testid="name-filter"
      />
      <select
        data-testid="column-filter"
        id="column-filter"
        name="column-filter"
        onClick={ (e) => getFilterColumn(e.target.value) }
      >
        {/* {console.log(isFilted)} */}
        <option
          // disabled={ isFilted.population }
          value="population"
          label="population"
        />
        <option
          // disabled={ isFilted.orbital_period }
          value="orbital_period"
          label="orbital_period"
        />
        <option
          /* disabled={ isFilted.diameter } */
          value="diameter"
          label="diameter"
        />
        <option
          // disabled={ isFilted.rotation_period }
          value="rotation_period"
          label="rotation_period"
        />
        <option
          // disabled={ isFilted.surface_water }
          value="surface_water"
          label="surface_water"
        />
      </select>
      <select
        data-testid="comparison-filter"
        id="comparison-filter"
        name="comparison-filter"
        onClick={ (e) => getFilterComparison(e.target.value) }
        required
      >
        <option value="maior_que">maior que</option>
        <option value="menor_que">menor que</option>
        <option value="igual_a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => getFilterNumber(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => Filter() }
      >
        Adicionar

      </button>
    </div>
  );
}

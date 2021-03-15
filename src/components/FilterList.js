import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterList() {
  const { filterByNumericValue } = useContext(StarWarsContext);

  return (
    <ul>
      {filterByNumericValue.map(({ column, value, comparision }, index) => (
        <li key={ index } data-testid="filter">
          {`${column} ${comparision} ${value}`}
          <button type="button">x</button>
        </li>))}
    </ul>
  );
}

export default FilterList;

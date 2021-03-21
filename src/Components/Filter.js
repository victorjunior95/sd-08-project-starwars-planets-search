import React, { useContext } from 'react';
import SWContext from '../Context/SWContext';

function Filter() {
  const { filterByName } = useContext(SWContext);
  return (
    <div>
      <label htmlFor="name-filter">
        Filtrar por Nome:
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ filterByName }
        />
      </label>
    </div>
  );
}

export default Filter;

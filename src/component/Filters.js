import React, { useContext } from 'react';
import contextApi from '../contextApi/createContext';

function Filters() {
  const { filters, fixFilters } = useContext(contextApi);

  const onChangeNamePlanet = ({ target: { value } }) => {
    fixFilters({ ...filters, filterByName: { name: value } });
  };

  return (
    <div>
      <label htmlFor="name">
        Digite o nome do planeta:
        {' '}
        <input
          id="name"
          type="text"
          data-testid="name-filter"
          onChange={ onChangeNamePlanet }
        />
      </label>
    </div>
  );
}

export default Filters;

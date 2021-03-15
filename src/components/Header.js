import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FormFilter from './FormFilter';

function Header() {
  const { handleFilterName } = useContext(StarWarsContext);
  return (
    <>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleFilterName }
      />
      <FormFilter />
    </>
  );
}

export default Header;

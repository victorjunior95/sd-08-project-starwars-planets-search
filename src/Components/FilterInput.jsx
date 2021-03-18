import React, { useContext } from 'react';
import StarWarsContext from '../Contexts/StarWars/StarWarsContext';

const FilterInput = () => {
  const { filters: { filtersByName: { name } }, setName } = useContext(StarWarsContext);
  return (
    <input
      value={ name }
      data-testid="name-filter"
      onChange={ ({ target: { value } }) => setName(value) }
    />
  );
};

export default FilterInput;

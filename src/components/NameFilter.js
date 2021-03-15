import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

const NameFilter = () => {
  const { filters: { filterByName: { name } },
    changeName } = useContext(StarWarsContext);
  return (
    <input data-testid="name-filter" value={ name } onChange={ changeName } />
  );
};

export default NameFilter;

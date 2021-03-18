import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Form() {
  const { handleSearchName, searchName } = useContext(StarWarsContext);
  return (
    <label htmlFor="Name">
      Name:
      <input
        data-testid="name-filter"
        type="text"
        value={ searchName }
        onChange={ handleSearchName }
      />
    </label>);
}

export default Form;

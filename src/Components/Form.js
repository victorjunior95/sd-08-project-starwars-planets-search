import React from 'react';
import StarWarsContext from '../Components/StarWarsContext';

function Form() {
  const { handleNameSearch, nameSearch } = useContext(StarWarsContext);
  return (
    <label htmlFor="Name">
      Name:
      <input
        data-testid="name-filter"
        type="text"
        value={ nameSearch }
        onChange={ handleNameSearch }
      />
    </label>
  );
}

export default Form;

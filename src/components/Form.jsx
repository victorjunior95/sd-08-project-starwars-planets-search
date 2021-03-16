import React from 'react';

import Planets from '../context/PlanetsContext';

function Form() {
  const { store: { filters, setFilters } } = React.useContext(Planets);
  const [name, setName] = React.useState('');

  function handleChange({ target }) {
    filters.filterByName.name = target.value;
    setName(target.value);
    setFilters({ ...filters });
  }

  return (
    <form autoComplete="off">
      <label htmlFor="name-input">
        Nome:
        <input
          value={ name }
          data-testid="name-filter"
          onChange={ handleChange }
          type="text"
          name="name"
          id="name-input"
        />
      </label>

    </form>
  );
}

export default Form;

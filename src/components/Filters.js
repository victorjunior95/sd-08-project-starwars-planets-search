import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filters() {
  const {
    filters,
    setFilters,
  } = useContext(MyContext);

  function filterByName({ target }) {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  }

  return (
    <div>
      <label htmlFor="input-name">
        {'Nome: '}
        <input
          data-testId="name-filter"
          id="input-name"
          placeholder="pesquise por planetas"
          onChange={ filterByName }
        />
      </label>
    </div>
  );
}

export default Filters;

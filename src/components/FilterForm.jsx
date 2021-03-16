import React, { useContext } from 'react';
import PlanetContext from '../contexts/PlanetContext';

function FilterForm() {
  const { filters, setFilters } = useContext(PlanetContext);

  const { filterByName: { name } } = filters;

  function handleChange({ target }) {
    const { id, value } = target;
    if (id === 'name') {
      setFilters({ filterByName: { [id]: value } });
    }
  }

  return (
    <form>
      <label htmlFor="filterByName">
        <input
          type="text"
          id="name"
          name="filterByName"
          value={ name }
          onChange={ (e) => handleChange(e) }
          data-testid="name-filter"
        />
      </label>
    </form>
  );
}

export default FilterForm;

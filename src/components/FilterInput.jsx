import React, { useContext } from 'react';
import context from '../context/context';

function FilterInput() {
  const { filter, setFilter } = useContext(context);

  const handleChange = ({ target }) => {
    setFilter({ ...filter,
      filterByName: {
        name: target.value,
      } });
  };

  return (
    <label htmlFor="filterInput">
      Nome do Planeta:
      <input
        id="filterInput"
        type="text"
        data-testid="name-filter"
        className="form-control"
        onChange={ handleChange }
      />
    </label>
  );
}

export default FilterInput;

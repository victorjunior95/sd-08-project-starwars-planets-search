import React, { useContext } from 'react';
import NewContext from '../context/NewContext';

export default function FilterComponent() {
  const { filter, setFilter } = useContext(NewContext);
  const {
    filterByName: { name },
  } = filter;

  const handleChange = (event) => {
    setFilter({
      ...filter,
      filterByName: {
        name: event.target.value,
      },
    });
  };

  return (
    <form>
      <input
        type="text"
        value={ name }
        onChange={ handleChange }
        data-testid="name-filter"
      />
    </form>
  );
}

import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { filters, setFilter } = useContext(StarWarsContext);

  const handleChange = (e) => {
    const { value } = e.target;
    const obj = { ...filters };
    obj.filterByName.name = value;
    setFilter(obj);
  };

  return (
    <div>
      <input
        type="text"
        onChange={ handleChange }
        data-testid="name-filter"
      />
    </div>
  );
}

export default Filter;

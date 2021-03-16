import React, { useContext } from 'react';
import { PlanetsContext } from '../../context/PlanetsContext';

const SearchBar = () => {
  const { filterByName } = useContext(PlanetsContext);
  const handleChange = ({ target: { value } }) => {
    filterByName(value);
  };
  return (

    <section className="search-bar">
      <input
        data-testid="name-filter"
        type="text"
        width="50"
        onChange={ handleChange }
      />
    </section>
  );
};

export default SearchBar;

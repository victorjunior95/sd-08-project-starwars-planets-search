import React, { useContext } from 'react';
import { PlanetsContext } from '../../context/PlanetsContext';

const InputSearch = () => {
  const { filterByName } = useContext(PlanetsContext);
  const handleChange = ({ target: { value } }) => {
    filterByName(value);
  };
  return (
    <section>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
      />
    </section>
  );
};

export default InputSearch;

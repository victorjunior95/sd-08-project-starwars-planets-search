import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Inputs() {
  const { filters, handleChange } = useContext(PlanetsContext);

  return (
    <input
      data-testid="name-filter"
      onChange={ handleChange }
      placeholder="Search"
      type="text"
      value={ filters.filtersByName }
    />
  );
}

export default Inputs;

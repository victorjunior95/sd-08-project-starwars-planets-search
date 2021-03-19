import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function InputForm() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const {
    filterByName: { name },
  } = filters;

  const handChange = (event) => {
    setFilters({
      ...filters,
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
        onChange={ handChange }
        data-testid="name-filter"
      />
    </form>
  );
}

import React, { useContext } from 'react';
import ContextPlanets from '../context/StarWarsContext';
import FormFilterNumeric from './FormFilterNumeric';

export default function FormFilter() {
  const { filters, setFilters } = useContext(ContextPlanets);
  const {
    filterByName: { name },
  } = filters;

  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
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
      <FormFilterNumeric />
    </form>
  );
}

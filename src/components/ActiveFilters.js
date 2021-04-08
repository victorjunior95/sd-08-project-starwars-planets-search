import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function ActiveFilters() {
  const { filters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  return (
    <>
      {filterByNumericValues.map((eachFilter) => {
        const { column, comparison, value } = eachFilter;
        if (!column) return '';
        return (
          <section key={ column } data-testid="filter">
            <span>{`${column} | ${comparison} | ${value}`}</span>
            <button type="button">X</button>
          </section>
        );
      })}
    </>
  );
}

import React, { useContext } from 'react';
import Context from '../context';

function FiltersChoices() {
  const { filter } = useContext(Context);
  if (filter.filterByNumericValues) {
    return filter.filterByNumericValues
      .map(({ column, comparison, value }, i) => (
        <div key={ i }>{`${column} ${comparison} ${value}`}</div>));
  }
  return '';
}

export default FiltersChoices;

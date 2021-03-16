import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function SelectedFilters() {
  const { filters, setFilters, columns, setColumns } = useContext(SWContext);
  const { filterByNumericValues } = filters;

  function handleDelete(column) {
    setColumns([...columns, column]);
    setFilters({
      ...filters,
      filterByNumericValues: filterByNumericValues.filter((element) => (
        element.column !== column
      )),
    });
  }

  return (
    <div>
      {filterByNumericValues.map((acc, index) => {
        const { column, comparison, value } = acc;
        if (!column) return 'Não há filtros.';
        return (
          <div key={ index } data-testid="filter">
            <p>{`${column} -- ${comparison} -- ${value}`}</p>
            <button onClick={ () => handleDelete(column) } type="button">deletar</button>
          </div>
        );
      })}
    </div>
  );
}

export default SelectedFilters;

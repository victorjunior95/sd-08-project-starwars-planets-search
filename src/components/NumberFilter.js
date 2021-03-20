import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

function NumberFilter() {
  const { setFilters, filters, filters: { filterByNumericValues: [{ column, comparison, value }] } } = useContext(TodoContext);
  const arrayCollum = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const arrayComparison = ['maior que', 'menor que', 'igual a'];

  // const filterNumeric = (event) => {
  //   setFilters(
  //     {
  //       ...filters,
  //       filterByNumericValues: [{
  //         [event.target.name]: event.target.value,
  //       }],
  //     },
  //   );
  // };

  const filtersAtivic = () => {
    if (column && comparison && value !== '') {
      return (
        <div>
          <p>{`${column} ${comparison} ${value}`}</p>
          <button>X</button>
          {console.log(arrayCollum.indexOf(column))}
        </div>
      );
    }
  };

  const filterNumeric = (event) => {
    if (event.target.name === 'column') {
      setFilters(
        {
          ...filters,
          filterByNumericValues: [{ column: event.target.value, comparison, value },

          ],
        },
      );
    }
    if (event.target.name === 'comparison') {
      setFilters(
        {
          ...filters,
          filterByNumericValues: [{ column, comparison: event.target.value, value },

          ],
        },
      );
    }
    if (event.target.name === 'value') {
      setFilters(
        {
          ...filters,
          filterByNumericValues: [{ column, comparison, value: event.target.value },

          ],
        },
      );
    }
  };

  const renderTable = () => (
    <div>
      <select name="column" data-testid="column-filter" onClick={ filterNumeric }>
        {arrayCollum.map((items) => (
          <option key={ items } value="items">{items}</option>
        ))}
      </select>
      <select name="comparison" data-testid="comparison-filter" onClick={ filterNumeric }>
        {arrayComparison.map((items) => (
          <option key={ items } value="maior que>">{items}</option>
        ))}
      </select>
      <input name="value" onChange={ filterNumeric } data-testid="value-filter" type="number" />
    </div>
  );

  return (
    <div>
      {filtersAtivic()}
      {renderTable()}
    </div>
  );
}

export default NumberFilter;

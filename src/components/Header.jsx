import React, { useState, useEffect, useContext } from 'react';

import starWarsContext from '../context/StarWarsContext';

const COLUMNS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const Header = () => {
  // fazer um custome hook pra todas as filtragens dps! maybe
  const { filters, setFilters } = useContext(starWarsContext);
  const { filterByNumericValues: { filtersArray } } = filters;

  const [name, setName] = useState('');

  const [columnOptions, setColumnOptions] = useState(COLUMNS);

  const [columnsFilter, setColumnsFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior-que');
  const [valueFilter, setValueFilter] = useState(0);

  //  ...filters.filterByNumericValues.filtersArray,
  const sendComparisonFilters = () => {
    setFilters({
      ...filters,
      filterByNumericValues: {
        status: true,
        filtersArray: [
          ...filters.filterByNumericValues.filtersArray,
          {
            column: columnsFilter,
            comparison: comparisonFilter,
            value: valueFilter,
          },
        ],
      },
    });
  };

  // useEffect(() => {
  //   console.log(name);
  // }, [name]);

  useEffect(() => {
    filtersArray.forEach(({ column: filterColumn }) => {
      console.log(filterColumn);
      setColumnOptions(columnOptions.filter((column) => column !== filterColumn));
    });
  }, [filtersArray]);

  return (
    <div>
      <label htmlFor="name-filter">
        Name
        <input
          id="name-filter"
          type="text"
          value={ name }
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => {
            setName(value);
            setFilters({
              ...filters,
              filterByName: {
                name: value,
              },
            });
          } }
        />
      </label>
      <label htmlFor="column-filter">
        columns
        <select
          id="column-filter"
          name="column"
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => setColumnsFilter(value) }
        >
          {columnOptions.map((column, index) => (
            <option value={ column } key={ index }>{column}</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          id="comparison-filter"
          name="comparison"
          data-testid="comparison-filter"
          onChange={ ({ target: { value } }) => setComparisonFilter(value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          id="value-filter"
          data-testid="value-filter"
          onChange={ ({ target: { value } }) => setValueFilter(value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => sendComparisonFilters() }
      >
        filtrar
      </button>
    </div>
  );
};

export default Header;

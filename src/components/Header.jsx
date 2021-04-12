import React, { useState, useEffect, useContext } from 'react';

import starWarsContext from '../context/StarWarsContext';

const Header = () => {
  // fazer um custome hook pra todas as filtragens dps!
  const { filters, setFilters } = useContext(starWarsContext);

  const [name, setName] = useState('');

  const [columnsFilter, setColumnsFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior-que');
  const [valueFilter, setValueFilter] = useState(0);

  function sendFilters(value) {
    setName(value);
    setFilters({ ...filters, filterByName: { name: value } });
  }

  //  ...filters.filterByNumericValues.filtersArray,
  const sendComparisonFilters = () => {
    setFilters({
      ...filters,
      filterByNumericValues: {
        status: true,
        filtersArray: [
          {
            column: columnsFilter,
            comparison: comparisonFilter,
            value: valueFilter,
          },
        ],
      },
    });
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    sendFilters(name);
    setFilters({ ...filters,
      filterByNumericValues: {
        status: false, filtersArray: [],
      } });
  }, []);

  return (
    <div>
      <label htmlFor="name-filter">
        Name
        <input
          id="name-filter"
          type="text"
          value={ name }
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => { sendFilters(value); } }
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
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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

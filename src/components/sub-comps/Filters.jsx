import React, { useState, useContext } from 'react';
import SWContext from '../../context/SWContext';

const Filters = () => {
  const context = useContext(SWContext);
  const { setFilters } = context;
  const [numFilters, setNumFilters] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  // Possível ideia pro req 4: transformar os filtros dropdown em estados globais maybe???w
  const columnFilters = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const comparisonFilters = [
    'maior que', 'menor que', 'igual a',
  ];

  const handleNameFilter = ({ target: { value } }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByName: { name: value },
    }));
  };

  const handleNumFilter = ({ target: { name, value } }) => {
    switch (name) {
    case 'column-filter':
      setNumFilters((prev) => ({
        ...prev,
        column: value,
      }));
      break;
    case 'comparison-filter':
      setNumFilters((prev) => ({
        ...prev,
        comparison: value,
      }));
      break;
    case 'value-filter':
      setNumFilters((prev) => ({
        ...prev,
        value: value.toString(),
      }));
      break;
    default:
    }
  };

  const numericFilters = () => {
    console.log(numFilters);
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByNumericValues: [
        ...prevFilters.filterByNumericValues,
        numFilters,
      ],
    }));
  };

  return (
    <>
      <label htmlFor="name-filter">
        Nome
        <input
          type="text"
          name="name-filter"
          data-testid="name-filter"
          onChange={ handleNameFilter }
        />
      </label>

      <select
        name="column-filter"
        data-testid="column-filter"
        onChange={ handleNumFilter }
      >
        {columnFilters.map((filter) => <option key={ filter }>{filter}</option>)}
      </select>

      <select
        name="comparison-filter"
        data-testid="comparison-filter"
        onChange={ handleNumFilter }
      >
        {comparisonFilters.map((filter) => <option key={ filter }>{filter}</option>)}
      </select>

      <label htmlFor="value-filter">
        Digite
        <input
          type="text"
          name="value-filter"
          data-testid="value-filter"
          onChange={ handleNumFilter }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ numericFilters }
      >
        Aplicar
      </button>
    </>
  );
};

export default Filters;

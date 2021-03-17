import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

const FILTERS_INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function Planets({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(FILTERS_INITIAL_STATE);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [columns, setColumns] = React.useState(['population',
    'orbital_period', 'rotation_period', 'surface_water', 'diameter']);

  function filterByName(name) {
    const planet = data.filter((item) => item.name.includes(name));
    setFilteredPlanets(planet);
  }

  ///
  ///

  function filterPlanetsWithValues(param) {
    param.forEach((item) => {
      const newValues = data.filter((planet) => {
        switch (item.comparison) {
        case 'maior que':
          return Number(planet[item.column]) > Number(item.value);
        case 'menor que':
          return Number(planet[item.column]) < Number(item.value);
        case 'igual a':
          return Number(planet[item.column]) === Number(item.value);
        default:
          return '';
        }
      });
      setFilteredPlanets(newValues);
    });
  }

  function deleteFilter({ column }) {
    const newValue = filters.filterByNumericValues
      .filter((item) => item.column !== column);
    console.log(newValue);
    setFilters({ ...filters, filterByNumericValues: newValue });
    const columnsNewValue = [...columns, column];
    setColumns([...new Set(columnsNewValue)]);
  }

  useEffect(() => {
    async function getItems() {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json());
      setData(results);
      setFilteredPlanets(results);
    }
    getItems();
  }, []);

  const store = {
    data,
    filters,
    setFilters,
    filterByName,
    filteredPlanets,
    filterPlanetsWithValues,
    deleteFilter,
    columns,
    setColumns,
  };
  return (
    <PlanetsContext.Provider value={ { store } }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default Planets;

Planets.propTypes = {
  children: PropTypes.node.isRequired,
};

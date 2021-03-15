import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarWarsPlanetsContext from './StarWarsPlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    async function getPlanets() {
      const planetsFetchData = await (await fetch('https://swapi-trybe.herokuapp.com/api/planets')).json();
      setData(planetsFetchData.results);
    }
    getPlanets();
  }, []);

  useEffect(() => {
    console.log('ENTROU NO FILTRO');
    const { filterByNumericValues } = filters;
    const filteredPlanetsByName = data
      .filter((planet) => planet.name.toLowerCase()
        .includes(filters.filterByName.name.toLowerCase()));
    let filteredPlanetsResult = filteredPlanetsByName;
    filterByNumericValues.forEach((filter) => {
      if (filter.comparison === 'maior que') {
        filteredPlanetsResult = filteredPlanetsResult
          .filter((planet) => (
            parseFloat(planet[filter.column]) > parseFloat(filter.value)
          ));
      }
      if (filter.comparison === 'menor que') {
        filteredPlanetsResult = filteredPlanetsResult
          .filter((planet) => (
            parseFloat(planet[filter.column]) < parseFloat(filter.value)
          ));
      }
      if (filter.comparison === 'igual a') {
        filteredPlanetsResult = filteredPlanetsResult
          .filter((planet) => (
            parseFloat(planet[filter.column]) === parseFloat(filter.value)
          ));
      }
    });
    setFilteredPlanets(filteredPlanetsResult);
  }, [data, filters]);

  const context = {
    filters,
    setFilters,
    filteredPlanets,
    setFilteredPlanets,
  };

  return (
    <StarWarsPlanetsContext.Provider value={ context }>
      {children}
    </StarWarsPlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

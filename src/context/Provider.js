import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarWarsPlanetsContext from './StarWarsPlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
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
    console.log('ENTROU NO FILTRO POR NOME');
    const filteredPlanetsByName = data
      .filter((planet) => planet.name.toLowerCase()
        .includes(filters.filterByName.name.toLowerCase()));
    setFilteredPlanets(filteredPlanetsByName);
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

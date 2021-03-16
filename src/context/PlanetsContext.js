import React, { createContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

export const PlanetsContext = createContext([]);

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    const getStarWarsPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((res) => res.json());
      setPlanets(results);
      setFilteredPlanets(results);
    };
    getStarWarsPlanets();
  }, []);

  const filterPlanetsByName = (text) => {
    const filtered = planets.filter(
      ({ name }) => name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredPlanets(filtered);
  };

  const context = {
    planets,
    filteredPlanets,
    filterByName: (text) => filterPlanetsByName(text),
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

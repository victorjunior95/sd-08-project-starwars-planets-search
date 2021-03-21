import React, { createContext, useEffect, useState } from 'react';

export const PlanetsContext = createContext([]);

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setPlanets(results);
    };
    fetchPlanets();
  }, []);

  const planetsFilter = (planetName) => {
    const filtered = planets?.filter(({name}) => name.includes(planetName));
    setFilteredPlanets(filtered || planets);
  };

  const context = {
    planets,
    filteredPlanets,
    filterPlanets: name => planetsFilter(name)
  }
  return (
    <PlanetsContext.Provider value={ planets }>
      {
        children
      }
    </PlanetsContext.Provider>
  );
};

export default PlanetsProvider;

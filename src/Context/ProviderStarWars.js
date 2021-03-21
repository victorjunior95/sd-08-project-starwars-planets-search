import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextStarWars from './ContextStarWars';

function ProviderStarWars({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    const fetchStarWarsAPI = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const dataInfo = await fetch(endpoint);
      const dataJson = await dataInfo.json();
      const { results } = dataJson;
      const dataPlanet = results;
      // console.log(dataJson);
      // console.log(dataPlanet);
      setPlanets(dataPlanet);
      setFilteredPlanets(dataPlanet);
    };
    fetchStarWarsAPI();
  }, []);

  const filterPlanets = (planetsName) => {
    const filter = planets.filter(({ name }) => name.toLowerCase().includes(planetsName));
    // console.log(filter);
    if (!filter) setFilteredPlanets(planets);
    setFilteredPlanets(filter);
  };

  const allContext = {
    planets,
    filterPlanets,
    filteredPlanets,
    setFilteredPlanets,
  };

  return (
    <ContextStarWars.Provider value={ allContext }>
      { children }
    </ContextStarWars.Provider>
  );
}

ProviderStarWars.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderStarWars;

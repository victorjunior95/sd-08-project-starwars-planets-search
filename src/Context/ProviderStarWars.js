import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextStarWars from './ContextStarWars';

function ProviderStarWars({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetsFiltered, setPlanetsFiltered] = useState([]);

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
    };
    fetchStarWarsAPI();
  }, []);

  const planetsFilter = (planetsName) => {
    const filter = planets.filter(({ name }) => name.includes(planetsName));
    setPlanetsFiltered(filter);
  };

  const allContext = {
    planets,
    planetsFilter,
    planetsFiltered,
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

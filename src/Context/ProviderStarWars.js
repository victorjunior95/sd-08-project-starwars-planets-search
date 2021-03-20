import React, { useState, useEffect } from 'react';
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
  };

  return (
    <ContextStarWars.Provider value={ allContext }>
      { children }
    </ContextStarWars.Provider>
  );
}

export default ProviderStarWars;

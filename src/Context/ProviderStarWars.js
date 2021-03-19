import React, { useState, useEffect } from 'react';
import ContextStarWars from './ContextStarWars';

function ProviderStarWars({ children }) {
  const [planets, setPlanets] = useState([]);

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

  return (
    <ContextStarWars.Provider value={ { planets } }>
      { children }
    </ContextStarWars.Provider>
  );
}

export default ProviderStarWars;

import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getData from '../api/getData';

export const savePlanet = createContext();

function PlanetContext({ children }) {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    async function effect() {
      const planetsList = await getData();
      setPlanets(planetsList);
    }
    effect();
  }, []);
  const contextValue = { planets };
  return (
    <savePlanet.Provider value={ contextValue }>
      { children }
    </savePlanet.Provider>
  );
}

PlanetContext.propTypes = {
  children: PropTypes.oneOfType.isRequired,
};

export default PlanetContext;

import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getData from '../api/getData';

export const savePlanet = createContext();

function PlanetContext({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filtersPlanets, setFilters] = useState([]);
  const [searchByName, setSearchByName] = useState([]);

  useEffect(() => {
    async function effect() {
      const planetsList = await getData();
      setPlanets(planetsList);
      setFilters(planetsList);
    }
    effect();
  }, []);

  useEffect(() => {
    let nameFilter = [];
    nameFilter = planets.filter((planet) => planet.name.includes((searchByName)));
    setFilters(nameFilter);
  }, [planets, searchByName]);

  const data = {
    searchByName,
    setSearchByName,
    filtersPlanets,
  };

  return (
    <savePlanet.Provider value={ data }>
      { children }
    </savePlanet.Provider>
  );
}

PlanetContext.propTypes = {
  children: PropTypes.oneOfType.isRequired,
};

export default PlanetContext;

import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSwapiPlanets } from '../services/swapi';

const ContextFromStarWars = createContext();
const { Provider, Consumer } = ContextFromStarWars;

function ContextFromStarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [inputName, setInputName] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  useEffect(() => {
    const fetchPlanets = async () => {
      const { results } = await getSwapiPlanets();
      setPlanets(results);
      setFilteredPlanets(results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filter = planets
      .filter(({ name }) => name
        .toLowerCase()
        .includes(inputName.toLowerCase()));
    setFilteredPlanets(filter);
  }, [planets, inputName]);

  const contextValue = {
    planets,
    inputName,
    setInputName,
    filteredPlanets,
    setFilteredPlanets,
  };

  return (
    <Provider value={ contextValue }>{children}</Provider>
  );
}

ContextFromStarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextFromStarWars, Consumer, ContextFromStarWarsProvider };

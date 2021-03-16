import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSwapiPlanets } from '../services/swapi';

const ContextFromStarWars = createContext();
const { Provider, Consumer } = ContextFromStarWars;

function ContextFromStarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [inputName, setInputName] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const createCondition = (planetsData) => ({
    maior_que: (keyToFilter, amount) => planetsData
      .filter((planet) => +planet[keyToFilter] > +amount),
    menor_que: (keyToFilter, amount) => planetsData
      .filter((planet) => +planet[keyToFilter] < +amount),
    igual_a: (keyToFilter, amount) => planetsData
      .filter((planet) => +planet[keyToFilter] === +amount),
  });

  const [instructionToFilter,
    setInstructionToFilter] = useState();

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

  useEffect(() => {
    function conditionFromFilter() {
      if (instructionToFilter) {
        const condition = createCondition(planets);
        const key = Object.values(instructionToFilter)[0];
        const method = Object.values(instructionToFilter)[1]
          .replace(' ', '_');
        const amount = Object.values(instructionToFilter)[2];
        const results = condition[method](key, amount);
        setFilteredPlanets(() => results);
      }
    }
    conditionFromFilter();
  }, [instructionToFilter, planets]);

  const contextValue = {
    planets,
    inputName,
    setInputName,
    filteredPlanets,
    instructionToFilter,
    setFilteredPlanets,
    setInstructionToFilter,
  };

  return (
    <Provider value={ contextValue }>{children}</Provider>
  );
}

ContextFromStarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextFromStarWars, Consumer, ContextFromStarWarsProvider };

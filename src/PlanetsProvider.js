import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const planetsContext = createContext([]);

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  useEffect(() => {
    const fetchPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((res) => res.json());
      console.log('results', results);
      setPlanets(results || []);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const planetsByName = planets
      .filter((planet) => planet.name.toLowerCase().includes(name));
    setFilteredPlanets(planetsByName);
  }, [name, planets]);

  const planetsValue = {
    planets,
    filteredPlanets,
    setName: (typedValue) => setName(typedValue),
  };

  return (
    <planetsContext.Provider value={ planetsValue }>
      {
        children
      }
    </planetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.shape([]).isRequired,
};

export default PlanetsProvider;

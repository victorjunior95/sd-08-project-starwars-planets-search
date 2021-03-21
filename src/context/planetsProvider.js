import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './planetsContext';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint)
        .then((response) => response.json());
      setPlanets(results);
      console.log(results);
    };
    fetchPlanets();
  }, []);

  const context = {
    planets,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {
        children
      }
    </PlanetsContext.Provider>
  );
};

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

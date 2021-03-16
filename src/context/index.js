import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './MyContext';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setPlanets(results);
    };
    fetchPlanets();
  }, []);

  const context = { planets };

  return (
    <PlanetsContext.Provider value={ context }>
      {
        children
      }
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

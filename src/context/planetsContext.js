import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const PlanetsContext = createContext([]);

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState();
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(ENDPOINT);
      const { results } = await response.json();
      setPlanets(results);
      setFetching(false);
    };
    fetchData();
  }, []);
  const data = {
    planets,
    fetching,
  };
  return (
    <PlanetsContext.Provider value={ data }>
      { children }
    </PlanetsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;

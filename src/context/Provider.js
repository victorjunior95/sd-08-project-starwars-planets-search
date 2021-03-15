import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const resultJson = await result.json();
      setPlanets(resultJson.results);
    };
    getData();
  }, []);

  const data = {
    planets,
  };

  return (
    <planetsContext.Provider value={ data }>
      {children}
    </planetsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

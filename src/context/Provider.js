import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './StarWarsContex';
import GetPlanets from '../services/api';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      const planets = await GetPlanets();
      setData(planets);
    }
    fetchPlanets();
  }, []);

  const context = {
    data,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = { children: PropTypes.node.isRequired };

export default Provider;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/getPlanets';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchPlanets() {
    const planets = await getPlanets();
    setData(planets);
    setIsLoading(true);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  const contextValue = {
    data,
    isLoading,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

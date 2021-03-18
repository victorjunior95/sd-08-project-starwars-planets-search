import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import createContext from './createContext';
import url from '../constantes/constanteApi';

function ProviderContext({ children }) {
  const [data, fixData] = useState([]);

  useEffect(() => {
    async function waitApi() {
      await fetch(url)
      .then((response) => response.json())
        .then((planetsInfo) => fixData(planetsInfo.results));
      }
    waitApi();
  }, []);
  const value = { data };
  return (
    <createContext.Provider value={ value }>
      { children }
    </createContext.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProviderContext;

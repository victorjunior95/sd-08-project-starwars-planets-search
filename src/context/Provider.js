import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarsAppContext from './StarsAppContext';
import getApi from '../services/index';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [stateB, setStateB] = useState('initialStateB');

  async function importApi() {
    const apiList = await getApi();
    setData(apiList);
  }

  useEffect(() => {
    importApi();
  }, []);

  const contextValue = {
    data,
    stateB,
    setStateB,
  };

  return (
    <StarsAppContext.Provider value={ contextValue }>
      {children}
    </StarsAppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

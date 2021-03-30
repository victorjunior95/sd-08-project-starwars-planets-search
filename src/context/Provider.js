import React, { useState, useEffect } from 'react';
import AppContext from './Context';
import getApi from '../services/api';

function Provider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getApi().then((response) => setData(response));
  }, []);
  const contextValue = {
    data,
  };
  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

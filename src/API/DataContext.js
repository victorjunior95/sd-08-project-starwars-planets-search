import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FETCH_API from './fetchAPI';

export const DataContext = createContext();

const GlobalDataContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [stateOn, setStateOn] = useState(false);
  useEffect(() => {
    (async () => {
      setStateOn(true);
      const response = await FETCH_API();
      setData(response);
      setStateOn(false);
    })();
  }, []);

  return (
    <DataContext.Provider value={ { data } }>
      { stateOn ? 'Loading' : children}
    </DataContext.Provider>
  );
};

GlobalDataContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalDataContext;

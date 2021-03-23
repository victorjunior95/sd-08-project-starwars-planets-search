import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import getPlanets from '../services/requestAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPlanets().then((resp) => setData(resp));
  }, []);

  const objectValues = {
    data,
  };

  return (
    <AppContext.Provider value={ objectValues }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf().isRequired,
};

export default Provider;

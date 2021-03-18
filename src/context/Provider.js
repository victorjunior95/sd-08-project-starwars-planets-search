import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

const Provider = ({ children }) => {
  const [state, setState] = useState({
    planetsTable: [],
    fetchPlanets: [],
  });
  return (
    <MyContext.Provider value={ { state, setState } }>
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Provider;

import React from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

const Provider = ({ children }) => (
  <MyContext.Provider value="test">
    {children}
  </MyContext.Provider>
);

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Provider;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './Context';

function StartWarsProvider({ children }) {
  const [test, setTest] = useState();

  return (
    <StarWarsContext.Provider value={ { test, setTest } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StartWarsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default StartWarsProvider;

import React from 'react';

import starWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {

  return (
    <starWarsContext.Provider value={ {test: 'Rafael'} }>
      { children }
    </starWarsContext.Provider>
  )
};

export default StarWarsProvider;

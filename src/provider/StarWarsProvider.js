import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanetsAPI from '../services/Api';

export const SWPlanetsContext = createContext();

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPlanetsAPI().then((response) => setData(response.results));
  }, []);

  const contextValue = {
    data,
    setData,
  };

  return (
    <SWPlanetsContext.Provider value={ contextValue }>
      {children}
    </SWPlanetsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

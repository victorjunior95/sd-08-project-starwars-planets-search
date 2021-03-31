import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SearchPlanetsContext from './SearchPlanetsContext';
import getPlanetsStarWars from '../services/api';

const SearchPlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      const objectAPI = await getPlanetsStarWars();
      const { results } = objectAPI;
      console.log(results);
      setPlanets(results);
    }
    fetchPlanets();
  }, []);

  const context = {
    planets,
  };

  return (
    <SearchPlanetsContext.Provider value={ context }>
      {children}
    </SearchPlanetsContext.Provider>
  );
};

SearchPlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchPlanetsProvider;

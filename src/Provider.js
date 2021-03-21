import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './context/StarWarsContext';
import fetchStarWars from './services';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchStarWars().then((response) => setData(response.results));
  }, []);

  const context = {
    data,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;

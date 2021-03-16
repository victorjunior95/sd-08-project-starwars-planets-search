import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';
import fetchPlanets from '../services/StarWarsAPI';

function StarProvider({ children }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setData(await fetchPlanets());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const context = {
    data,
  };

  return (
    <StarContext.Provider value={ context }>
      { children }
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarProvider;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { getStarWarsAPI } from '../services/StarWarsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    async function fetchData() {
      const response = await getStarWarsAPI();
      setData(response.results);
    }
    fetchData();
  }, []);

  const context = {
    data,
    filters,
    setFilter,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

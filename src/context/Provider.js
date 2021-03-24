import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/getPlanets';

const filterState = {
  filterByName: {
    text: '',
  },
};
function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState(filterState);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  async function fetchPlanets() {
    const planets = await getPlanets();
    setData(planets);
    setIsLoading(true);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    const { filterByName: { text } } = filters;
    const filtered = data.filter((planet) => planet.name.includes(text));
    setFilteredPlanets(filtered);
  }, [filters, data]);

  const contextValue = {
    data,
    isLoading,
    filters,
    setFilters,
    filteredPlanets,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

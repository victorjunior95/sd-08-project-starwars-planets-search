import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../services/getPlanets';

const filterPlanets = {
  filterByName: {
    name: '',
  },
};

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState(filterPlanets);
  const [planets, setPlanets] = useState([]);

  async function getPlanets() {
    const starWarsPlanets = await fetchPlanets();
    setData(starWarsPlanets);
    setIsLoading(true);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filtered = data.filter((item) => item.name.includes(name) && item);
    setPlanets(filtered);
  }, [data, filters]);

  const value = {
    data,
    planets,
    isLoading,
    filters,
    setFilters,
    // filterName,
  };

  return (
    <PlanetContext.Provider value={ value }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

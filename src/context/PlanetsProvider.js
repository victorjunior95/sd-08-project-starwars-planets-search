import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetsAPI from '../services/planetsAPI';

const allFilters = {
  filterByName: {
    name: '',
  },
};

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState(allFilters);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const planetsFromAPI = await planetsAPI();
      setData(planetsFromAPI.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filteredByName = data
      .filter((planet) => planet.name.toUpperCase().includes(name.toUpperCase()));
    setPlanets(filteredByName);
  }, [data, filters]);

  const context = { planets, isLoading, filters, setFilters };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

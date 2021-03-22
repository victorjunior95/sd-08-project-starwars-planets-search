import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';
import planetsAPIRequest from '../services/planetsAPIRequest';

function StarWarsPlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filteredPlanets, setFilteredPlanets] = useState(planets);
  const getPlanetsInfos = async () => {
    const planetsInfos = await planetsAPIRequest();

    const one = 1;
    const negative = -1;
    const zero = 0;

    planetsInfos.sort((a, b) => {
      if (a.name > b.name) {
        return one;
      }
      if (a.name < b.name) {
        return negative;
      }
      return zero;
    });
    setPlanets(planetsInfos);
  };

  useEffect(() => {
    getPlanetsInfos();
  }, []);

  useEffect(() => {
    setFilteredPlanets(planets
      .filter((planet) => planet.name.includes(filters.filterByName.name)));
  }, [filters, planets]);

  const data = {
    filteredPlanets,
    filters,
    setFilters,
  };

  return (
    <StarWarsPlanetsContext.Provider value={ data }>
      {children}
    </StarWarsPlanetsContext.Provider>
  );
}

StarWarsPlanetsProvider.propTypes = { children: PropTypes.node.isRequired };

export default StarWarsPlanetsProvider;

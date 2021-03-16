import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import { asyncSetter, fetchPlanets } from '../services/asyncFunctions';

function filter(arrToFilter) {
  console.log(arrToFilter);
}

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState();
  const [loadingPlanets, setloadingPlanets] = useState(true);
  const [filteredPlanets, setFilteredPlanets] = useState();

  if (!loadingPlanets) { filter(planets.results); }

  useEffect(() => {
    asyncSetter(fetchPlanets, setPlanets, setloadingPlanets);
  }, []);

  const ProviderObject = {
    planets,
    loadingPlanets,
  };
  return (
    <PlanetsContext.Provider value={ ProviderObject }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

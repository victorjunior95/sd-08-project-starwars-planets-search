import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import { asyncSetter, fetchPlanets } from '../services/asyncFunctions';

function filter(arrToFilter, key, comparator, value) {
  const replaceComma = value.replace(',', '.');
  const numberValue = parseFloat(replaceComma);
  return arrToFilter.filter((element) => {
    const replaceCommaElement = element[key].replace(',', '.');
    const numberValueElement = parseFloat(replaceCommaElement);
    switch (comparator) {
    case 'greater':
      return numberValueElement > numberValue;
    case 'smaller':
      return numberValueElement < numberValue;
    case 'equal':
      return numberValueElement === numberValue;
    default:
      return false;
    }
  });
}

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState();
  const [loadingPlanets, setloadingPlanets] = useState(true);
  const [filteredPlanets, setFilteredPlanets] = useState();

  if (!loadingPlanets) { filter(planets.results, 'diameter', 'equal', '10465'); }

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

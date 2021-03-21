import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../contexts/PlanetsContext';
import { getPlanetsFromApi } from '../services/requests';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  async function fetchPlanets() {
    const allPlanets = await getPlanetsFromApi();
    setData(allPlanets);
    return allPlanets;
  }

  const state = {
    data,
    fetchPlanets,
  };

  return (
    <PlanetsContext.Provider value={ { ...state } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

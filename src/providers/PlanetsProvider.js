import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../contexts/PlanetsContext';
import { getPlanetsFromApi } from '../services/requests';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  async function fetchPlanets() {
    const allPlanets = await getPlanetsFromApi();
    setData(allPlanets);
    return allPlanets;
  }

  function handleFilterByName(name) {
    setFilterByName({ name });
  }

  function addNumericFilter() {
  }

  function removeNumericFilter() {
  }

  const filters = {
    filterByName,
    filterByNumericValues,
  };

  const state = {
    data,
    fetchPlanets,
    filters,
    handleFilterByName,
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

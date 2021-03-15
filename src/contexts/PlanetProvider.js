import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import { getPlanetsList } from '../services/PlanetsAPI';

function PlanetProvider({ children }) {
  const [planetsList, setPlanetsList] = useState({});

  async function fetchPlanetsList() {
    const planetsFromAPI = await getPlanetsList();
    setPlanetsList(planetsFromAPI);
  }

  return (
    <PlanetContext.Provider value={ { planetsList, fetchPlanetsList } }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;

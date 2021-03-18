import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../services/getPlanets';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getPlanets() {
    const planets = await fetchPlanets();
    setData(planets);
    setIsLoading(true);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  // useEffect(() => {
  //   fetchPlanets().then((result) => {
  //     setData(result);
  //   });
  // }, []);

  const value = { data, isLoading };
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

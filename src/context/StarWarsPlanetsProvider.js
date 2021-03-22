import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsPlanetsContext from './StarWarsPlanetsContext';
import planetsAPIRequest from '../services/planetsAPIRequest';

function StarWarsPlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const getPlanetsInfos = async () => {
    const planetsInfos = await planetsAPIRequest();

    const one = 1;
    const neg = -1;
    const zero = 0;

    planetsInfos.sort((a, b) => {
      if (a.name > b.name) {
        return one;
      }
      if (a.name < b.name) {
        return neg;
      }
      return zero;
    });
    setPlanets(planetsInfos);
  };

  useEffect(() => {
    getPlanetsInfos();
  }, []);

  const data = {
    planets,
  };

  return (
    <StarWarsPlanetsContext.Provider value={ data }>
      {children}
    </StarWarsPlanetsContext.Provider>
  );
}

StarWarsPlanetsProvider.propTypes = { children: PropTypes.node.isRequired };

export default StarWarsPlanetsProvider;

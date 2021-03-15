import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './Context';
import fetchAllPlanets from '../helpers';

function StartWarsProvider({ children }) {
  const [planetList, setPlanetList] = useState();

  async function getPlanets() {
    const allPlanets = await fetchAllPlanets();
    allPlanets.forEach((planet) => {
      delete planet.residents;
    });
    setPlanetList(allPlanets);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ { planetList } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StartWarsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default StartWarsProvider;

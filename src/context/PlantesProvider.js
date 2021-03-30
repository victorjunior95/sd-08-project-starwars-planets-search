import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getDataPlanetsStarWars from '../services/planetsAPI';

const ONE = 1;
function PlanetsProvider({ children }) {
  const [dataStarWars, setDataStarWars] = useState([]);

  useEffect(() => {
    const response = getDataPlanetsStarWars();
    response.then((data) => {
      setDataStarWars(data.results.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -ONE;
        }
        return 0;
      }));
    });
  }, []);

  const context = { dataStarWars, setDataStarWars };

  return <PlanetsContext.Provider value={ context }>{children}</PlanetsContext.Provider>;
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getListPlanetsStarWars from '../services/planetsAPI';

const ONE = 1;
function PlanetsProvider({ children }) {
  const [listPlanets, setListPlanets] = useState([]);
  const [searchName, setSearchName] = useState({ name: 'Tatoo' });

  useEffect(() => {
    const response = getListPlanetsStarWars();
    response.then((data) => {
      setListPlanets(data.results.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -ONE;
        }
        // a must be equal to b
        return 0;
      }));
    });
  }, []);

  const context = { listPlanets, setListPlanets, searchName, setSearchName };

  return <PlanetsContext.Provider value={ context }>{children}</PlanetsContext.Provider>;
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

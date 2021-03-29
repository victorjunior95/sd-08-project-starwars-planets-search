import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getListPlanetsStarWars from '../services/planetsAPI';

function PlanetsProvider({ children }) {
  const [listPlanets, setListPlanets] = useState([]);
  const [searchName, setSearchName] = useState({ name: 'Tatoo' });

  useEffect(() => {
    const response = getListPlanetsStarWars();
    response.then((data) => {
      setListPlanets(data.results);
    });
    // console.log('eu sou o PlanetsProvider e estou  renderizado');
  }, []);

  const context = { listPlanets, setListPlanets, searchName, setSearchName };

  return <PlanetsContext.Provider value={ context }>{children}</PlanetsContext.Provider>;
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

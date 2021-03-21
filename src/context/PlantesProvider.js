import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getListPlanetsStarWars from '../services/planetsAPI';

function PlanetsProvider({ children }) {
  const [dataApi, setDataApi] = useState([]);
  const [listPlanets, setListPlanets] = useState([]);

  useEffect(() => {
    const response = getListPlanetsStarWars();
    response.then((data) => {
      setDataApi(data);
      setListPlanets(data.results);
    });
  }, []);

  const context = { dataApi, listPlanets };

  return <PlanetsContext.Provider value={ context }>{children}</PlanetsContext.Provider>;
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

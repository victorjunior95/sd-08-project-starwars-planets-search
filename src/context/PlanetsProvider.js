import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../service/FecthApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { // componentDidMount
    getPlanets().then(({ results }) => {
      results.forEach((result) => delete result.residents);
      setData(results);
      setIsLoading(false);
    });
  }, []);

  const contextValues = { data, setData, isLoading, setIsLoading };
  return (
    <PlanetsContext.Provider value={ contextValues }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import fetchData from '../services/API';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [requesting, setRequesting] = useState(false);
  const [data, setData] = useState([]);

  const fetchPlanets = async () => {
    setRequesting(true);
    const planets = await fetchData();
    setData([...planets]);
    setRequesting(false);
  };

  useEffect(() => { fetchPlanets(); }, []);

  return (
    <PlanetsContext.Provider value={ { requesting, data } }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = { children: PropTypes.node.isRequired };

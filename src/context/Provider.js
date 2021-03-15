import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getData from '../services';
import tableContext from './tableContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStarWarsData = async () => {
    setLoading(true);
    const planetsInfo = await getData();
    planetsInfo.forEach((result) => delete result.residents);
    setData(planetsInfo);
    setLoading(false);
  };

  const context = { data, fetchStarWarsData, loading };

  return (
    <tableContext.Provider value={ context }>
      {children}
    </tableContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

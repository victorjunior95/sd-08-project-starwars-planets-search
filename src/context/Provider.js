// 3º
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextApi from './Context';
import requestApi from '../services/Api';

function ProviderApi({ children }) {
  const [dataApi, setDataApi] = useState([]);

  const fetchPlanet = async () => {
    setDataApi(await requestApi());
  };

  useEffect(() => {
    fetchPlanet();
  }, []);

  const context = {
    dataApi,
  };

  return (
    <ContextApi.Provider value={ context }>
      {
        children
      }
    </ContextApi.Provider>
  );
}

export default ProviderApi;

ProviderApi.propTypes = {
  children: PropTypes.node.isRequired,
};

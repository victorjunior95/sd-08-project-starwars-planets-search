// 3º crio o provider, que vai prover o context para os componentes filhos
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextApi from './Context';
import requestApi from '../services/Api';

function ProviderApi({ children }) {
  const [dataApi, setDataApi] = useState([]); // crio o estado
  const [filterName, setFilterName] = useState('');

  const fetchPlanet = async () => { // coloco dentro da função os dados da requisição
    setDataApi(await requestApi());
  };

  useEffect(() => { // quando a página abre, executo a função carregando os dados uma vez apenas
    fetchPlanet();
  }, []);

  const context = { // crio uma variável context, para mandar por props no provider os dados do estado
    dataApi,
    filterName,
    setFilterName,
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

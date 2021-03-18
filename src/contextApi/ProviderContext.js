import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import createContext from './createContext';
import url from '../constantes/constanteApi';

function ProviderContext({ children }) {
  const [data, fixData] = useState([]);
  const [filters, fixFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filterData, fixFilterData] = useState([]);

  useEffect(() => {
    async function waitApi() {
      await fetch(url)
        .then((response) => response.json())
        .then((planetsInfo) => {
          fixData(planetsInfo.results);
          fixFilterData(planetsInfo.results);
        })
    }
    waitApi();
  }, []);

  const { filterByName: { name } } = filters;

  useEffect(() => {
    const filterByName = data.filter((element) => element.name.includes(name));

    fixFilterData(filterByName);
  }, [name]);

  const value = { data, filters, fixFilters, filterData };

  return (
    <createContext.Provider value={ value }>
      { children }
    </createContext.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderContext;

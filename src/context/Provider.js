import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarsAppContext from './StarsAppContext';
import getApi from '../services/index';

const filterNameObj = {
  filterByName: {
    name: '',
  },
};

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [byName, setByName] = useState(filterNameObj);
  const [filteredPlanets, setFilteredPlanets] = useState(data);
  const [numFilter, setNumFilter] = useState([]);
  const [newData, setNewData] = useState([]);

  async function importApi() {
    const apiList = await getApi();
    setData(apiList);
  }

  useEffect(() => {
    importApi();
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = byName;
    const retorno = data.filter((planet) => planet.name.includes(name) && planet);
    setNewData(retorno);
  }, [byName, data]);

  useEffect(() => {
    numFilter.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        setNewData(data.filter((i) => Number(i[column]) > Number(value)));
      } else if (comparison === 'menor que') {
        setNewData(data.filter((i) => Number(i[column]) < Number(value)));
      } else {
        setNewData(data.filter((i) => Number(i[column]) === Number(value)));
      }
    });
  }, [data, numFilter]);

  const contextValue = {
    filteredPlanets,
    byName,
    setByName,
    data,
    setFilteredPlanets,
    setNumFilter,
    numFilter,
    newData,
    setNewData,
  };

  return (
    <StarsAppContext.Provider value={ contextValue }>
      {children}
    </StarsAppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

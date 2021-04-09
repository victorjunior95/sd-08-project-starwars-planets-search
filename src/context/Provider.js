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

  async function importApi() {
    const apiList = await getApi();
    setData(apiList);
  }

  useEffect(() => {
    importApi();
  }, []);
  useEffect(() => {
    const { filterByName: { name } } = byName;
    setFilteredPlanets(data.filter((planet) => planet.name.includes(name)));
  }, [byName, data]);

  const contextValue = {
    filteredPlanets,
    byName,
    setByName,
    data,
    setFilteredPlanets,
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

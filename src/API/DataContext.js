import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import FETCH_API from './fetchAPI';

export const DataContext = createContext();

const GlobalDataContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [stateOn, setStateOn] = useState(false);

  const [searchName, setSearchName] = useState('');
  const [filterPlanet, setFilterPlanet] = useState([]);

  useEffect(() => {
    (async () => {
      setStateOn(true);
      const response = await FETCH_API();
      setData(response);
      setStateOn(false);
    })();
  }, []);

  useEffect(() => {
    const filterPlanets = data.filter((planet) => planet.name.includes((searchName)));
    setFilterPlanet(filterPlanets);
  }, [data, searchName]);

  const filterName = ({ target }) => setSearchName(target.value);

  const context = {
    data,
    searchName,
    filterPlanet,
    setData,
    filterName,
  };

  return (
    <DataContext.Provider value={ context }>
      { stateOn ? 'Loading' : children }
    </DataContext.Provider>
  );
};

GlobalDataContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalDataContext;

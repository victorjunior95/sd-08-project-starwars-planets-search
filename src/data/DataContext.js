import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import searchPlanets from '../services/Api';

export const DataContext = createContext();

const initialState = {
  state: [],
  headers: [],

};
const Store = (props) => {
  const { children } = props;
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const planets = await searchPlanets();

      setData({
        ...data,
        state: planets.filter((planetas) => delete planetas.residents),
        headers: Object.keys(planets[0]).filter((header) => header !== 'residents'),
      });

      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={ { data, setData, loading } }>
      {children}
    </DataContext.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Store;

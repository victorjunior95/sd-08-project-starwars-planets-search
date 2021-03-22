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

  useEffect(async () => {
    searchPlanets().then((planets) => {
      setData({
        ...data,
        state: planets.filter((planets) => delete planets.residents),
        headers: Object.keys(planets[0]).filter((planets) => planets !== 'residents'),
      });
      setLoading(false);
    });
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

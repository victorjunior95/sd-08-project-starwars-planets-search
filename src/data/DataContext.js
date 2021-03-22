import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import searchPlanets from '../services/Api';

export const DataContext = createContext();

const initialState = {
  state: [],
  headers: [],
  original: [],

};
const Store = (props) => {
  const { children } = props;
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ filterByName: {
    name: '',
  } });

  useEffect(() => {
    async function fetchData() {
      const planets = await searchPlanets();

      setData({
        ...data,
        state: planets.filter((planetas) => delete planetas.residents),
        headers: Object.keys(planets[0]).filter((header) => header !== 'residents'),
        original: planets.filter((planetas) => delete planetas.residents),
      });

      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      state: prev.original.filter((planet) => planet.name
        .includes(filters.filterByName.name)),
    }));
  }, [filters]);

  return (
    <DataContext.Provider value={ { data, setData, loading, filters, setFilters } }>
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

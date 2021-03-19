import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './StarWarsContex';
import GetPlanets from '../services/api';

const Provider = ({ children }) => {
  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });
  const [columnsToDrop, setColumns] = useState(columns);

  useEffect(() => {
    async function fetchPlanets() {
      const planets = await GetPlanets();
      setData(planets);
    }
    fetchPlanets();
  }, []);

  const context = {
    data,
    filters,
    columnsToDrop,
    setFilters,
    setColumns,
  };

  return <Context.Provider value={ context }>{children}</Context.Provider>;
};

Provider.propTypes = { children: PropTypes.node.isRequired };

export default Provider;

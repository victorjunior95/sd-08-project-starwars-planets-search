import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import Context from './Context';

import fetchPlanetsData from '../services/StarWarsPlanetsApi';

function Provider({ children }) {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);
  const [availableColumnFilters, setAvailableColumnFilters] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  function onChangeName(id, value) {
    setFilters({ ...filters, filterByName: { [id]: value } });
  }

  function onClickAddFilter(newFilter) {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, newFilter],
    });
  }

  async function getPlanets() {
    setIsFetching(true);
    const planetsData = await fetchPlanetsData();
    setData(planetsData);
    setIsFetching(false);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <Context.Provider
      value={ {
        isFetching,
        data,
        availableColumnFilters,
        filters,
        onChangeName,
        onClickAddFilter,
      } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

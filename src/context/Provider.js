import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import Context from './Context';

import fetchPlanetsData from '../services/StarWarsPlanetsApi';

function Provider({ children }) {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [numericFilterValues, setNumericFilterValues] = useState({
    column: columnOptions[0],
    comparison: 'maior que',
    value: 0,
  });

  function onChangeNumericFilter(id, value) {
    setNumericFilterValues({ ...numericFilterValues, [id]: value });
  }

  function onChangeNameFilter(id, value) {
    setFilters({ ...filters, filterByName: { [id]: value } });
  }

  function onClickAddFilter() {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, numericFilterValues],
    });
  }

  function onClickRemoveFilter(column) {
    const updateNumericFilter = filters.filterByNumericValues
      .filter((filter) => filter.column !== column);
    setFilters({ ...filters, filterByNumericValues: updateNumericFilter });
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

  useEffect(() => {
    const usedOptions = filters.filterByNumericValues.map((filter) => filter.column);
    setColumnOptions((previousState) => previousState
      .filter((column) => !usedOptions.includes(column)));
  }, [filters]);

  useEffect(() => {
    setNumericFilterValues({
      column: columnOptions[0],
      comparison: 'maior que',
      value: 0,
    });
  }, [columnOptions]);

  const value = {
    columnOptions,
    numericFilterValues,
    isFetching,
    data,
    filters,
    onChangeNameFilter,
    onClickAddFilter,
    onClickRemoveFilter,
    onChangeNumericFilter,
  };

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

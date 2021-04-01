import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../contexts/PlanetsContext';
import { getPlanetsFromApi } from '../services/requests';

function PlanetsProvider({ children }) {
  const SELECT_COLUMN = 'Selecione uma coluna';
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [numericColumns, setNumericColumns] = useState([
    SELECT_COLUMN,
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [dataToFilter, setDataToFilter] = useState({
    column: SELECT_COLUMN,
    comparison: 'maior que',
    value: 0,
  });

  async function fetchPlanets() {
    const allPlanets = await getPlanetsFromApi();
    setData(allPlanets);
    return allPlanets;
  }

  function handleFilterByName(name) {
    setFilterByName({ name });
  }

  function handleDataToFilter(key, value) {
    setDataToFilter({
      ...dataToFilter,
      [key]: value,
    });
  }

  function addNumericFilter() {
    const { column } = dataToFilter;
    if (column === SELECT_COLUMN) return;
    const newNumericColumns = numericColumns.filter(
      (numericColumn) => numericColumn !== column,
    );

    console.log(newNumericColumns);
    setNumericColumns(newNumericColumns);
    setFilterByNumericValues([...filterByNumericValues, dataToFilter]);
    setDataToFilter({ ...dataToFilter, column: SELECT_COLUMN });
  }

  function removeNumericFilter() {
  }

  const filters = {
    filterByName,
    filterByNumericValues,
  };

  const state = {
    addNumericFilter,
    data,
    dataToFilter,
    fetchPlanets,
    filterByNumericValues,
    filters,
    handleFilterByName,
    handleDataToFilter,
    numericColumns,
  };

  return (
    <PlanetsContext.Provider value={ { ...state } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

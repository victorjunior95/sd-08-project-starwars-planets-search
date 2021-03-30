import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getDataPlanetsStarWars from '../services/planetsAPI';

const ONE = 1;

const filter = (dataStarWars, filters) => {
  let newData = [...dataStarWars];
  const { filterByNumericValues } = filters;
  const [{ column, comparison, value }] = filterByNumericValues;
  const { filterByName: { name } } = filters;
  if (dataStarWars.length !== 0 || value) {
    newData = newData.filter((element) => element.name
      .toUpperCase()
      .includes(name.toUpperCase()));
    if (comparison === 'maior que') {
      newData = newData.filter((element) => Number(element[column]) > Number(value));
    }
    if (comparison === 'menor que') {
      newData = newData.filter((element) => Number(element[column]) < Number(value));
    }
    if (comparison === 'igual a') {
      newData = newData.filter((element) => Number(element[column]) === Number(value));
    }
    return newData;
  }
  return dataStarWars;
};

function PlanetsProvider({ children }) {
  const [dataStarWars, setDataStarWars] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  useEffect(() => {
    const response = getDataPlanetsStarWars();
    response.then((data) => {
      console.log('Provider Renderizado');
      setDataStarWars(data.results.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -ONE;
        }
        return 0;
      }));
      setDescriptions(Object.keys(data.results[0]));
    });
  }, []);

  const data = [...filter(dataStarWars, filters)];

  const context = { data,
    setDataStarWars,
    descriptions,
    filters,
    setFilters,
    setDescriptions };

  return <PlanetsContext.Provider value={ context }>{children}</PlanetsContext.Provider>;
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

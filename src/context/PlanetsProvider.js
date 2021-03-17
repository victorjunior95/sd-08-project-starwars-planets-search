import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../service/FecthApi';

import testData from '../testData';

function PlanetsProvider({ children }) {
  const [initialData, setInitialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({ filterByName: {}, filterByNumericValues: [] });
  const [dataFiltered, setDataFiltered] = useState([]);
  const [numberFilter, setNumberFilter] = useState(
    { column: '', comparison: '', value: '' },
  );

  useEffect(() => { // componentDidMount
    getPlanets().then(({ results }) => {
      results.forEach((result) => delete result.residents);
      setInitialData(results);
      setDataFiltered(testData.results);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const VALUE_TO_ERASE = -1;
    if (initialData[0]) {
      const filterList = initialData.filter(({ name }) => (
        name.toLowerCase().indexOf(filters.filterByName.toLowerCase()) !== VALUE_TO_ERASE
      ));
      setDataFiltered(filterList);
    }
  }, [filters.filterByName]);

  useEffect(() => {
    let numericFilter = dataFiltered;
    const { filterByNumericValues } = filters;
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      numericFilter = numericFilter.filter((info) => {
        const infoColumn = parseInt(info[column], 10);
        const valueInt = parseInt(value, 10);
        if (comparison === 'maior que') return (infoColumn > valueInt);
        if (comparison === 'menor que') return (infoColumn < valueInt);
        if (comparison === 'igual a') return (infoColumn === valueInt);
        return true;
      });
      setDataFiltered(numericFilter);
    });
  }, [filters.filterByNumericValues]);

  const handleChange = ({ target }) => {
    switch (target.name) {
    case 'name':
      setFilters({ ...filters, filterByName: target.value });
      break;
    case 'data':
      setNumberFilter({ ...numberFilter, column: target.value });
      break;
    case 'range':
      setNumberFilter({ ...numberFilter, comparison: target.value });
      break;
    case 'number':
      setNumberFilter({ ...numberFilter, value: target.value });
      break;
    default: break;
    }
  };

  const handleClick = () => {
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, numberFilter] });
  };

  const contextValues = {
    dataFiltered, isLoading, filters, handleChange, numberFilter, handleClick };
  return (
    <PlanetsContext.Provider value={ contextValues }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

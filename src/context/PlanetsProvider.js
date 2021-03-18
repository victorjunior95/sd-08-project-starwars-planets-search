import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../service/FecthApi';

import testData from '../testData';

function PlanetsProvider({ children }) {
  const [initialData, setInitialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: { name: '' }, filterByNumericValues: [] });
  const [dataFiltered, setDataFiltered] = useState([]);
  const [numberFilter, setNumberFilter] = useState(
    { column: '', comparison: '', value: '' },
  );

  useEffect(() => {
    getPlanets().then(({ results }) => {
      results.forEach((result) => delete result.residents);
      setInitialData(results);
      setDataFiltered(testData.results);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const VALUE_TO_ERASE = -1;
    const { filterByName, filterByNumericValues } = filters;
    let filterList = initialData.filter(({ name }) => (
      name.toLowerCase().indexOf(filterByName.name.toLowerCase()) !== VALUE_TO_ERASE
    ));
    setDataFiltered(filterList);

    filterByNumericValues.forEach(({ column, comparison, value }) => {
      filterList = filterList.filter((info) => {
        const infoColumn = parseInt(info[column], 10);
        const valueInt = parseInt(value, 10);
        if (comparison === 'maior que') return (infoColumn > valueInt);
        if (comparison === 'menor que') return (infoColumn < valueInt);
        if (comparison === 'igual a') return (infoColumn === valueInt);
        return true;
      });
      setDataFiltered(filterList);
    });
  }, [filters]);

  const handleChange = ({ target }) => {
    switch (target.name) {
    case 'name':
      setFilters({ ...filters, filterByName: { name: target.value } });
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

  const handleClearFilter = (chip) => {
    const listClear = filters.filterByNumericValues.filter((num) => (num !== chip));
    setFilters({ ...filters,
      filterByNumericValues: listClear });
  };

  const contextValues = {
    dataFiltered,
    isLoading,
    filters,
    handleChange,
    numberFilter,
    handleClick,
    handleClearFilter,
  };

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

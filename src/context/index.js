import React, { createContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });
  const [planets, setPlanets] = useState([]);
  const handleData = async () => {
    const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((res) => res.json())
      .then((apiData) => apiData.results)
      .catch((err) => console.log(err));
    setData(result);
    setPlanets(result);
  };

  const applyNumericFilter = (filtered, { column, comparison, value }) => {
    switch (comparison) {
    case 'maior que':
      return filtered.filter((planet) => Number(planet[column]) > Number(value));
    case 'menor que':
      return filtered.filter((planet) => Number(planet[column]) < Number(value));
    case 'igual a':
      return filtered.filter((planet) => planet[column] === value);
    default:
      return filtered;
    }
  };

  const applyAllNumericFilters = useCallback((
    filtered = data,
    numericFilters = filters.filterByNumericValues,
  ) => {
    if (!numericFilters.length) setPlanets(filtered);
    if (numericFilters.length === 1 && filtered) {
      setPlanets(applyNumericFilter(filtered, numericFilters[0]));
    }
    if (numericFilters.length > 1) {
      const currentFilter = numericFilters[0];
      const nextFilters = numericFilters.slice(1);
      const currentFiltered = applyNumericFilter(filtered, currentFilter);
      applyAllNumericFilters(currentFiltered, [...nextFilters]);
    }
  }, [filters, data]);

  useEffect(() => {
    applyAllNumericFilters();
  }, [applyAllNumericFilters, filters]);

  const handleFilterByName = (name) => {
    setFilters({
      ...filters,
      filterByName: {
        name,
      },
    });
  };
  const handleFilterByNumericValues = ({ column, comparison, value }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };
  const removeNumericFilter = (filterColumn) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...(filters.filterByNumericValues
          .filter(({ column }) => column !== filterColumn)),
      ],
    });
  };

  const obj = {
    dataObject: {
      data,
      handleData,
      planets,
    },
    filterObject: {
      filters,
      handleFilterByName,
      handleFilterByNumericValues,
      removeNumericFilter,
    },
  };

  return (
    <Context.Provider value={ obj }>
      { children }
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContextProvider;

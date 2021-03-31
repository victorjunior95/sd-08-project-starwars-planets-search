import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const handleData = async (callback) => {
    const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((res) => res.json())
      .then((apiData) => {
        callback(apiData.results);
        return apiData.results;
      })
      .catch((err) => console.log(err));
    setData(result);
  };

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: '',
    }],
  });
  const handleFilterByName = (name) => {
    setFilters({
      ...filters,
      filterByName: {
        name,
      },
    });
  };
  const handleFilterByNumericValues = (type, value) => {
    setFilters({
      ...filters,
      filterByNumericValues: [{
        ...filters.filterByNumericValues[0],
        [type]: value,
      }],
    });
  };

  const obj = {
    dataObject: { data, handleData },
    filterObject: { filters, handleFilterByName, handleFilterByNumericValues },
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

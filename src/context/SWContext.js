import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SWContext = createContext();
const SWProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [] });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  const context = {
    data,
    setSearch,
    setFilter,
    filter,
    search,
  };

  useEffect(() => {
    setFilter({ ...filter, filterByName: { name: search } });
  }, [filter, search]);

  return (
    <SWContext.Provider value={ context }>
      { children }
    </SWContext.Provider>
  );
};
export { SWContext, SWProvider };

SWProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

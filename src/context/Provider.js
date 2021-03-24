import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import getPlanets from '../services/requestAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filters: { filterByName: { name: '' } },
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    getPlanets().then((value) => setData(value));
  }, []);

  const objectValues = {
    data,
    setData,
    filters,
    setFilters,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <AppContext.Provider value={ objectValues }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf().isRequired,
};

export default Provider;

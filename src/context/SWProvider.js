import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import services from '../services';
import utils from '../utils';

const SWProvider = ({ children }) => {
  const { Provider } = SWContext;

  const [data, setData] = useState({});
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    async function getResponse() {
      const response = await services.fetchData(setData);
      setData(response);
      setFilteredPlanets(response.results);
      console.log(response.results);
    }
    getResponse();
  }, []);

  useEffect(() => {
    const { name } = filters.filterByName;
    setFilteredPlanets(utils.filterByName(data.results, name));
  }, [filters.filterByName]);

  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
    filteredPlanets,
    setFilteredPlanets,
  };

  return (
    <Provider value={ contextValue }>
      {children}
    </Provider>
  );
};

SWProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SWProvider;

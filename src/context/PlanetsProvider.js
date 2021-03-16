import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getPlanets from '../service/FecthApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({ filterByName: {} });
  const [dataFiltered, setDataFiltered] = useState({ dataByName: [] });

  useEffect(() => { // componentDidMount
    getPlanets().then(({ results }) => {
      results.forEach((result) => delete result.residents);
      setData(results);
      setDataFiltered({ dataByName: results });
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const VALUE_TO_ERASE = -1;
    if (data[0]) {
      const filterList = data.filter(({ name }) => (
        name.toLowerCase().indexOf(filters.filterByName.toLowerCase()) !== VALUE_TO_ERASE
      ));
      setDataFiltered({ dataByName: filterList });
    }
  }, [filters.filterByName]);

  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: target.value,
    });
  };

  const contextValues = { dataFiltered, isLoading, filters, handleChange };
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

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/index';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const [newData, setNewData] = useState([]);

  async function importPlanets() {
    const planetsList = await getPlanets();
    setData(planetsList);
    setLoading(true);
  }

  useEffect(() => {
    importPlanets();
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filterDataName = data.filter((i) => (i.name.includes(name) && i));
    setNewData(filterDataName);
  }, [data, filters]);

  const globalState = {
    data,
    loading,
    filters,
    setFilters,
    newData,
  };
  return (
    <StarWarsContext.Provider value={ globalState }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

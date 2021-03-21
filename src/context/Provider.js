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

  function filterName() {
    const { filterByName: { name } } = filters;
    const filterDataName = data.filter((i) => (i.name.includes(name) && i));
    setNewData(filterDataName);
  }

  function handleNameChange(e) {
    setFilters({ filterByName: { name: e.target.value } });
    filterName();
  }

  const globalState = {
    data,
    loading,
    filters,
    handleNameChange,
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

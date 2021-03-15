import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([{ name: '' }]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    async function fetchData() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((response) => response.json());
      results.map((object) => delete object.residents);
      setData(results);
    }
    fetchData();
  }, [filters]);

  function handleChange({ target }) {
    setFilters({ filterByName: { name: target.value } });
  }

  const context = { data, setData, filters, setFilters, handleChange };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropType.node.isRequired,
};

export default Provider;

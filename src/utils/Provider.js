import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([{ content: null }]);
  const context = { data, setData };

  useEffect(() => {
    async function fetchData() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((response) => response.json());
      setData(results);
    }
    fetchData();
  }, [setData]);

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

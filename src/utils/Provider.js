import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [planetList, setList] = useState([{ content: null }]);
  const contextValue = {
    data: planetList,
    setList,
  };

  useEffect(() => {
    async function fetchData() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((response) => response.json());
      // console.log(results);
      setList(results);
    }
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropType.func.isRequired,
};

export default Provider;

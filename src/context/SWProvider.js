import React, { useEffect, useState } from 'react';
import SWContext from './SWContext';

const SWProvider = ({ children }) => {
  const { Provider } = SWContext;
  const [data, setData] = useState({});
  useEffect(() => {
    async function getPlanetsData() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const result = await fetch(url);
      const resultJSON = await result.json();
      setData(resultJSON);
    }
    getPlanetsData();
  }, []);
  const contextValue = {
    data,
  };

  return (
    <Provider value={ contextValue }>
      {children}
    </Provider>
  );
};

export default SWProvider;

import React, { useEffect, useState } from 'react';
import requestApi from '../RequestApi/requestApi';
import planetsContext from './planetsContext';

function Provider ({ children }) {
  
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    requestApi().then((response) => setData(response.results));
    setIsFetching(false);
  }, []);

  const planetsValue = {
    data,
    isFetching,
    setIsFetching,
  }

  return (
    <planetsContext.Provider value={planetsValue}>
      {children}
    </planetsContext.Provider>
  )
}

export default Provider;

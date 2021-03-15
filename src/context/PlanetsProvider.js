import React, {useEffect, useState} from 'react';
import PlanetsContext from './PlanetsContext';
import getPlanetsAPI from '../services/StarwarsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { results } = await getPlanetsAPI();
      setData({ data: results });
      setIsFetching(false);
    }
    fetchData(); 
  }, []);

  return (
    <PlanetsContext.Provider
      value={ { ...data, isFetching, setData, setIsFetching } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

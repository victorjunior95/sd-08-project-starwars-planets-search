import React, { useContext, useEffect, useState } from 'react';
import Table from '../components/Table';
import PlanetsContext from '../contexts/PlanetsContext';

function Home() {
  const [isFetching, setIsFetching] = useState(true);
  const { fetchPlanets, filters, handleFilterByName } = useContext(PlanetsContext);
  const { name } = filters.filterByName;

  useEffect(() => {
    fetchPlanets().then((planets) => planets);
    setIsFetching(false);
  }, []);

  return (
    <>
      <header>
        <input
          data-testid="name-filter"
          type="text"
          onChange={ (event) => handleFilterByName(event.target.value) }
          value={ name }
        />
      </header>
      { !isFetching && <Table /> }
    </>
  );
}

export default Home;

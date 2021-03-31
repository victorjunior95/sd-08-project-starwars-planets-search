import React, { useContext, useEffect, useState } from 'react';
import Table from '../components/Table';
import PlanetsContext from '../contexts/PlanetsContext';
import Select from '../components/Select';

function Home() {
  const [isFetching, setIsFetching] = useState(true);
  const { fetchPlanets, filters, handleFilterByName } = useContext(PlanetsContext);
  const { name } = filters.filterByName;

  const numericColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'
  ];

  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

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
      <Select testid="column-filter" options={ numericColumns } />
      <Select testid="comparison-filter" options={ comparisonOptions } />
      </header>
      { !isFetching && <Table /> }
    </>
  );
}

export default Home;

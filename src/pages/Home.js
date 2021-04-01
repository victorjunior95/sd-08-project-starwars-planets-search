import React, { useContext, useEffect, useState } from 'react';
import Table from '../components/Table';
import PlanetsContext from '../contexts/PlanetsContext';
import Select from '../components/Select';
import NumericFilters from '../components/NumericFilters';

function Home() {
  const [isFetching, setIsFetching] = useState(true);
  const {
    addNumericFilter,
    dataToFilter,
    fetchPlanets,
    filters,
    handleFilterByName,
    handleDataToFilter,
    numericColumns,
  } = useContext(PlanetsContext);

  const { value } = dataToFilter;
  const { name } = filters.filterByName;

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
        <Select
          testid="column-filter"
          options={ numericColumns }
          onChange={ ({ target }) => handleDataToFilter('column', target.value) }
        />
        <Select
          testid="comparison-filter"
          options={ comparisonOptions }
          onChange={ ({ target }) => handleDataToFilter('comparison', target.value) }
        />
        <input
          data-testid="value-filter"
          type="number"
          onChange={ ({ target }) => handleDataToFilter('value', target.value) }
          value={ value }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ addNumericFilter }
        >
          Filtrar
        </button>
        <NumericFilters />
      </header>
      { !isFetching && <Table /> }
    </>
  );
}

export default Home;

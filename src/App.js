import React, { useEffect, useState } from 'react';
import fetchPlanets from './services/api';
import Context from './context/Context';
import FilterContext from './context/FilterContext';
import './App.css';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ filters: { filterByName: { name: '' } } });
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    fetchPlanets()
      .then((response) => setDataFilter(response));
  }, []);

  useEffect(() => {
    let dataF = dataFilter;
    const { filters: { filterByName: { name } } } = filters;
    if (dataFilter !== [] && name !== '') {
      dataF = dataF.filter((i) => i.name.includes(name));
    }
    setData(dataF);
  }, [dataFilter, filters]);

  function setFilterByName({ target }) {
    setFilters({
      ...filters,
      filters: {
        filterByName: {
          name: target.value,
        },
      },
    });
  }

  return (
    <FilterContext.Provider value={ [filters, setFilters] }>
      <Context.Provider value={ data }>
        <input
          type="text"
          placeholder="Buscar Nome"
          data-testid="name-filter"
          onChange={ setFilterByName }
        />
        <Table />
      </Context.Provider>
    </FilterContext.Provider>
  );
}

export default App;

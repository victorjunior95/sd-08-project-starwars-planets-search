import React, { useEffect, useState } from 'react';
import './App.css';
import buscaPlanetas from './api';
import StarWarsContext from './context/StarWarsContext';
import Table from './components/Table';
import Filters from './context/Filters';

const INITIAL_FILTER = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTER);
  const [dataf, setDataf] = useState([]);

  useEffect(() => {
    buscaPlanetas()
      .then((resp) => setDataf(resp));
  }, []);

  useEffect(() => {
    let filteredData = dataf;
    const { filters: { filterByName: { name } } } = filters;
    if (dataf !== [] && name !== '') {
      filteredData = filteredData.filter((item) => item.name.includes(name));
    }
    setData(filteredData);
  }, [dataf, filters]);

  function setFilter({ target }) {
    setFilters({
      ...filters, filters: { filterByName: { name: target.value } },
    });
  }
  return (
    <Filters.Provider value={ [filters, setFilter] }>
      <StarWarsContext.Provider value={ data }>
        <span>Hello, App!</span>
        <input onChange={ setFilter } placeholder="Buscar Nome" data-testid="name-filter" />
        <Table />
      </StarWarsContext.Provider>
    </Filters.Provider>
  );
}

export default App;

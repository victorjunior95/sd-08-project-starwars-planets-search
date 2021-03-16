import React, { useState, useEffect } from 'react';
import './App.css';
import Filter from './components/Filter';
import Table from './components/Table';
import MyDataContext from './context/Context';
import getData from './services';

function App() {
  const [data, setData] = useState([]);
  let filteredData = data;
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
  const { filterByName: { name } } = filters;
  const context = { filters, setFilters };

  useEffect(() => {
    getData()
      .then((response) => setData(response));
  }, []);

  if (name !== '') {
    filteredData = data.filter((filteredName) => filteredName.name.includes(name));
  }

  return (
    <MyDataContext.Provider value={ context }>
      <Filter />
      <Table data={ filteredData } />
    </MyDataContext.Provider>
  );
}

export default App;

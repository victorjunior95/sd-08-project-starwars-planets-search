import React, { useEffect, useState } from 'react';
import fetchPlanets from './services/api';
import Context from './context/Context';
import './App.css';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPlanets()
      .then((response) => setData(response));
  }, []);

  return (
    <Context.Provider value={ data }>
      <Table />
    </Context.Provider>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Table from './components/table';
import './App.css';
import myContext from './context/dataContext';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await response.json();
      setData(results);
    }
    fetchData();
  }, []);

  return (
    <myContext.Provider value={ data }>
      <span>Kompre uma Kombi!</span>
      <Table />
    </myContext.Provider>
  );
}

export default App;

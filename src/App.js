import React, { useContext, useEffect } from 'react';
import Context from './context';
import './App.css';
import Table from './component/Table';
import NameFilter from './component/NameFilter';

function App() {
  const { setData, setHeaders, setFilteredData } = useContext(Context);
  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((res) => res.json());
      setData(results);
      const headers = Object.keys(results[0]).filter((head) => head !== 'residents');
      setHeaders(headers);
      setFilteredData(results);
    };
    fetchPlanets();
  }, [setData, setHeaders, setFilteredData]);
  return (
    <main>
      <NameFilter />
      <Table />
    </main>
  );
}

export default App;

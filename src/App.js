import React, { useState, useEffect } from 'react';
import { StateProvider } from './contexts/StateContext';
import getPlanets from './services/apiRequest';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    getPlanets().then((response) => setData(response));
  }, []);
  const providerValue = {
    data,
    filters: {
      filterByName: {
        name: filterName,
      },
    },
  };
  return (
    <StateProvider value={ providerValue }>
      <span>STAR WARS PLANETS</span>
      <input
        data-testid="name-filter"
        type="text"
        value={ filterName }
        onChange={ (e) => setFilterName(e.target.value) }
      />
      <Table />
    </StateProvider>
  );
}

export default App;

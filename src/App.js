import React, { useEffect, useState } from 'react';
import './App.css';
import buscaPlanetas from './api';
import StarWarsContext from './context/StarWarsContext';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    buscaPlanetas()
      .then((resp) => setData(resp));
  }, []);
  return (
    <StarWarsContext.Provider value={ data }>
      <span>Hello, App!</span>
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;

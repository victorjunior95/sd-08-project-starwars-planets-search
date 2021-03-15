import React from 'react';
import './App.css';
import Table from './Components/Table';
import Filter from './Components/Filter';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Filter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;

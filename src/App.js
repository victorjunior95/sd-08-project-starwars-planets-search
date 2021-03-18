import React from 'react';
import './App.css';
import Filters from './Components/Filters';
import Table from './Components/Table';
import StarWarsProvider from './Contexts/StarWars/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Filters />
      <Table />
    </StarWarsProvider>
  );
}

export default App;

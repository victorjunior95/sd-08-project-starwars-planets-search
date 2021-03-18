import React from 'react';
import './App.css';
import FilterInput from './Components/FilterInput';
import Table from './Components/Table';
import StarWarsProvider from './Contexts/StarWars/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <FilterInput />
      <Table />
    </StarWarsProvider>
  );
}

export default App;

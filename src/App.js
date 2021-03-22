import React from 'react';
import './App.css';
import PlanetsProvider from './Context/PlanetsProvider';
import Table from './Components/Table';

function App() {
  return (
    <PlanetsProvider>
      <h2>Star Wars</h2>
      <Table />
    </PlanetsProvider>
  );
}

export default App;

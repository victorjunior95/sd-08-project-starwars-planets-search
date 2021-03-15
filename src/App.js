import React from 'react';
import Table from './components/Table';
import PlanetsProvider from './context/StarWarsProvider';

function App() {
  return (
    <PlanetsProvider>
      <span>STAR WARS PLANETS</span>
      <Table />
    </PlanetsProvider>
  );
}

export default App;

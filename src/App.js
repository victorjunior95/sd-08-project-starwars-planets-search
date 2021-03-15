import React from 'react';
import FormFilter from './components/FormFilter';
import Table from './components/Table';
import PlanetsProvider from './context/StarWarsProvider';

function App() {
  return (
    <PlanetsProvider>
      <span>STAR WARS PLANETS</span>
      <FormFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import Filtro from './components/Filtro';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Filtro />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

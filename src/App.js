import React from 'react';
import './App.css';
import PlanetsProvider from './contextAPI/PlanetsProvider';
import Table from './r-components/Table';

function App() {
  return (
    <PlanetsProvider>
      App
      <Table />
    </PlanetsProvider>
  );
}

export default App;

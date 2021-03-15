import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';

import Header from './components/Header';
import Table from './components/Table';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import Inputs from './components/Inputs';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <header>
        <Inputs />
      </header>
      <hr />
      <main>
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;

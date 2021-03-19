import React from 'react';
import NumericFilter from './components/NumericFilter';
import TextFilter from './components/TextFilter';
import PlanetsTable from './components/PlanetsTable';
import './App.css';

function App() {
  return (
    <main>
      <TextFilter />
      <NumericFilter />
      <PlanetsTable />
    </main>
  );
}

export default App;

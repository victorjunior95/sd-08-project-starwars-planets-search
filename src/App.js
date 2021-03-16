import React from 'react';
import './App.css';
import Table from './components/Table';
// import Filter from './components/Filter';
import PlanetsProvider from './context';
// import SortingFilter from './components/SortingFilter';

function App() {
  return (
    <PlanetsProvider>
      <Table />
    </PlanetsProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import InputForm from './components/InputForm';
import HandleActiveFilters from './components/HandleActiveFilters';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import SortTableForm from './components/SortTableForm';

function App() {
  return (
    <PlanetsProvider>
      <InputForm />
      <HandleActiveFilters />
      <SortTableForm />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

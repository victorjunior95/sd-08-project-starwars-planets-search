import React from 'react';
import './App.css';
import FilterForm from './components/FilterForm';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <span>Hello, App!</span>
      <FilterForm />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

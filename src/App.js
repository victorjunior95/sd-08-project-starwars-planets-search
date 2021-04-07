import React from 'react';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
import NumericFilter from './components/NumericFilter';
import './App.css';
import ProviderAPI from './services/context';

function App() {
  return (
    <ProviderAPI>
      <FilterByName />
      <NumericFilter />
      <Table />
    </ProviderAPI>
  );
}

export default App;

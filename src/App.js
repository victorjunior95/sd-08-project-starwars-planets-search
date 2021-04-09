import React from 'react';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
import NumericFilter from './components/NumericFilter';
import './App.css';
import ProviderAPI from './services/context';
import SortFilter from './components/SortFilter';
import ActiveFilters from './components/ActiveFilters';

function App() {
  return (
    <ProviderAPI>
      <FilterByName />
      <NumericFilter />
      <SortFilter />
      <ActiveFilters />
      <Table />
    </ProviderAPI>
  );
}

export default App;

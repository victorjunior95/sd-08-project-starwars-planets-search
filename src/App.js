import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './features/Table';
import SearchBar from './features/SearchBar';
import CombinedFilters from './features/filters/CombinedFilters';

function App() {
  return (
    <Provider>
      <SearchBar />
      <CombinedFilters />
      <Table />
    </Provider>
  );
}

export default App;

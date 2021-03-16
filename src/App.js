import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './features/Table';
import SearchBar from './features/SearchBar';

function App() {
  return (
    <Provider>
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;

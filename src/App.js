import React from 'react';
import './bootstrap.css';
import FilterInput from './components/FilterInput';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <FilterInput />
      <Table />
    </Provider>
  );
}

export default App;

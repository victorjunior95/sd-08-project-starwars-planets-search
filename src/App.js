import React from 'react';
import './App.css';
import Table from './components/Table';
import Store from './data/DataContext';

function App() {
  return (
    <Store>
      <Table />
    </Store>
  );
}

export default App;

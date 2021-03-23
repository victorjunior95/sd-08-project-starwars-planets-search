import React from 'react';
import Table from './components/Table';
import './App.css';
import ProviderAPI from './services/context';

function App() {
  return (
    <ProviderAPI>
      <Table />
    </ProviderAPI>
  );
}

export default App;

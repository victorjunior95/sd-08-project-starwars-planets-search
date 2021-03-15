import React from 'react';
import './App.css';
import Table from './components/Table';
import StartWarsProvider from './context/StartWarsProvider';

function App() {
  return (
    <StartWarsProvider>
      <Table />
    </StartWarsProvider>
  );
}

export default App;

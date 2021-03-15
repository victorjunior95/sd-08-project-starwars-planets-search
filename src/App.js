import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetProvider from './contexts/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <span>Hello, App!</span>
      <Table />
    </PlanetProvider>
  );
}

export default App;

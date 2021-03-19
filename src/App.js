import React from 'react';
import './App.css';
import Table from './components/SWTable';
import SWProvider from './context/SWProvider';

function App() {
  return (
    <SWProvider>
      <h1>Mais um projeto...</h1>
      <Table />
    </SWProvider>
  );
}

export default App;

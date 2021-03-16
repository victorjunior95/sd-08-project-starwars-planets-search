import React from 'react';

import ContextProvider from './context';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <ContextProvider>
      <Table />
    </ContextProvider>
  );
}

export default App;

import React from 'react';
import { SWTable } from './components';
import './App.css';
import { SWProvider } from './context/SWContext';

function App() {
  return (
    <SWProvider>
      <SWTable />
    </SWProvider>
  );
}

export default App;

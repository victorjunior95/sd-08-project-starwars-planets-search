import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';
import Forms from './components/Forms';
import FormsNumeric from './components/FormsNumeric';

function App() {
  return (
    <Provider>
      <Forms />
      <FormsNumeric />
      <Table />
    </Provider>
  );
}

export default App;

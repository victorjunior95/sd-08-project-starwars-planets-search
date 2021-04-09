import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';
import Forms from './components/Forms';

function App() {
  return (
    <Provider>
      <Forms />
      <Table />
    </Provider>
  );
}

export default App;

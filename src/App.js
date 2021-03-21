import React from 'react';
import './App.css';
import Table from './table/Table';
import Provider from './context/Provider';
import Form from './search/Form';

function App() {
  return (
    <Provider>
      <Form />
      <Table />
    </Provider>
  );
}

export default App;

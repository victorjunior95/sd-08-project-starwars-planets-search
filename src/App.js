import React from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div>
        <Form />
        <hr />
        <Table />
      </div>
    </Provider>
  );
}

export default App;

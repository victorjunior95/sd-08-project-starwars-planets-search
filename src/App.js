import React from 'react';
import './App.css';
import NumericFilterForm from './components/FilterForm';
import Form from './components/Form';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div>
        <Form />
        <NumericFilterForm />
        <hr />
        <Table />
      </div>
    </Provider>
  );
}

export default App;

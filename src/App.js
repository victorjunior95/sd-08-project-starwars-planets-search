import React from 'react';
import './App.css';
import InputName from './componentes/InputName';
import InputNumericForm from './componentes/InputNumericForm';
import Table from './componentes/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <InputName />
      <InputNumericForm />
      <Table />
    </Provider>
  );
}

export default App;

import React from 'react';
import Form from './components/Form';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <div>
        <Form />
        <hr />
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;

import React from 'react';
import Table from './component/Table';
import StarWarsProvider from './provider/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <p>Hello</p>
      <Table />
    </StarWarsProvider>
  );
}

export default App;

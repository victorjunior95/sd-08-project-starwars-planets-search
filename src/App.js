import React from 'react';
import './App.css';
import Provider from './context/Provider';
import TablePage from './pages/TablePage';

function App() {
  return (

  // 4º
    <Provider>
      {/* 7º */}
      <TablePage />
    </Provider>
  );
}

export default App;

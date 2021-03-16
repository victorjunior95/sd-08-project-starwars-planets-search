import React from 'react';
import './App.css';
import StarwarsTable from './components/StarwarsTable';
import StarwarsProvider from './context/StarwarsProvider';

function App() {
  return (
    <StarwarsProvider>
      <StarwarsTable />
    </StarwarsProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import StartWarsProvider from './context/StartWarsProvider';
import Home from './pages/Home';

function App() {
  return (
    <StartWarsProvider>
      <Home />
    </StartWarsProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <App />
    </Provider>
  );
}

export default App;

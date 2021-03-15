import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Home } from './components';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </div>
  );
}

export default App;

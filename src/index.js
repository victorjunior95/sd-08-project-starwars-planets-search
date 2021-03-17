import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ContextStar from './context/ContextStar';

const { _currentValue } = ContextStar;

ReactDOM.render(
  <ContextStar.Provider data={ _currentValue }>
    <App />
  </ContextStar.Provider>,
  document.getElementById('root'),
);

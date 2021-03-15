import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './index';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const context = { data, setData, headers, setHeaders };
  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

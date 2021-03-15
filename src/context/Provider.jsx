import React, { useState } from 'react';
import PropTypes from 'prop-types';
import tableContext from './tableContext';

export default function Provider({ children }) {
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  const context = {
    data,
    isFetching,
    setData,
    setIsFetching,
  };

  return (
    <div>
      <tableContext.Provider value={ context }>
        {children}
      </tableContext.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

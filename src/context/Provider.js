import React, { useState } from 'react';
import MyDataContext from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const context = { data, setData };

  return (
    <MyDataContext.Provider value={ context }>
      {children}
    </MyDataContext.Provider>
  );
}

export default Provider;

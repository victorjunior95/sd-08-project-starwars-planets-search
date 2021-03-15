import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import AppContext from './Context';

function Provider() { // { children }
  const [stateA, setStateA] = useState('initialStateA');
  const [stateB, setStateB] = useState('initialStateB');
  const contextValue = {
    stateA,
    setStateA,
    stateB,
    setStateB,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {/* {children} */}
      <span>Teste</span>
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
//  children: PropTypes.element.isRequired,
};

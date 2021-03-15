import React, { useContext } from 'react';
import AppContext from '../utils/AppContext';

const Filters = () => {
  const { handleChange } = useContext(AppContext);

  return (
    <header>
      <input type="text" data-testid="name-filter" onChange={ handleChange } />
    </header>
  );
};

export default Filters;

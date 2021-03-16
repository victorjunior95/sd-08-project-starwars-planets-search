import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [name, setName] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  const provide = {
    filters: {
      filterByName: {
        name,
      },
    },
    function: {
      handleChange,
    },
  };

  return (
    <PlanetsContext.Provider value={ provide }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

const FILTERS_INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

function Planets({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(FILTERS_INITIAL_STATE);

  useEffect(() => {
    async function getItems() {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json());
      setData(results);
    }
    getItems();
  }, []);

  const store = {
    data,
    filters,
    setFilters,
  };
  return (
    <PlanetsContext.Provider value={ { store } }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default Planets;

Planets.propTypes = {
  children: PropTypes.node.isRequired,
};

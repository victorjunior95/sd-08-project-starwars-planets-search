import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './StarWarsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      const response = await fetch(
        'https://swapi-trybe.herokuapp.com/api/planets/',
      );
      const { results } = await response.json();
      setData(results);
    };
    getResults();
  }, []);

  return (
    <ContextPlanets.Provider value={ { data, setData } }>
      {children}
    </ContextPlanets.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

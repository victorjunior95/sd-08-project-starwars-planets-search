import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './StarWarsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    const getResults = async () => {
      const response = await fetch(
        'https://swapi-trybe.herokuapp.com/api/planets/',
      );
      const { results } = await response.json();
      setData(results);
    };
    getResults();
  }, [data]);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filter = data.filter((planet) => planet.name.includes(name));
    setPlanets(filter);
  }, [data, filters]);

  return (
    <ContextPlanets.Provider value={ { planets, setPlanets, filters, setFilters } }>
      {children}
    </ContextPlanets.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

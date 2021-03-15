import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json()).then((result) => setData(result.results));
  }, [data]);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filter = data.filter((planet) => planet.name.includes(name));
    setPlanets(filter);
    console.log('a');
  }, [data, filters]);

  const context = { planets, setPlanets, filters, setFilters };

  return <PlanetsContext.Provider value={ context }>{children}</PlanetsContext.Provider>;
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

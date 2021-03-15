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
    filterByNumericValues: {
      column: 'population',
      comparison: 'maior que',
      value: 0,
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
  useEffect(() => {
    const {
      filterByName: { name },
      filterByNumericValues: { column, comparison, value },
    } = filters;
    const filter = data.filter((planet) => {
      const includesName = planet.name.includes(name);
      switch (comparison) {
      case ('maior que'):
        return parseInt(planet[column], 10) > parseInt(value, 10) && includesName;
      case ('menor que'):
        return parseInt(planet[column], 10) < parseInt(value, 10) && includesName;
      case ('igual a'):
        return parseInt(planet[column], 10) === parseInt(value, 10) && includesName;
      default:
        return includesName;
      }
    });
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

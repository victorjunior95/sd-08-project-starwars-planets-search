import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const planetsContext = createContext([]);

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: { name: '' },
      filterByNumericValues: [],
    },
  );
  const { filterByNumericValues } = filters;

  useEffect(() => {
    const fetchPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((res) => res.json());
      console.log('results', results);
      setFilteredPlanets(results || []);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    // criar filtro numerico pela manhã
  });

  useEffect(() => {
    const { name } = filters.filterByName;
    const planetsByName = filteredPlanets
      .filter((planet) => planet.name.toLowerCase().includes(name));
    setFilteredPlanets(planetsByName);
  }, [filteredPlanets, filters]);

  const planetsValue = {
    filteredPlanets,
    setName: (typedValue) => setFilters(
      { ...filters, filterByName: { name: typedValue } },
    ),
    filters,
    setNumericFilter: (column, comparison, value) => setFilters(
      { ...filters,
        filterByNumericValues: [...filterByNumericValues, { column, comparison, value }],
      },
    ),
  };

  return (
    <planetsContext.Provider value={ planetsValue }>
      {
        children
      }
    </planetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.shape([]).isRequired,
};

export default PlanetsProvider;

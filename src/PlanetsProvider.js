import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const planetsContext = createContext([]);

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: { name: '' },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
  );
  // const { filterByNumericValues } = filters;

  useEffect(() => {
    const fetchPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((res) => res.json());
      console.log('results', results);
      setPlanets(results || []);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const { name } = filters.filterByName;
    // if (filteredPlanets !== []) {
    //   const planetsByName = filteredPlanets
    //     .filter((planet) => planet.name.toLowerCase().includes(name));
    //   setFilteredPlanets(planetsByName);
    // } else {
    //   const planetsByName = planets
    //     .filter((planet) => planet.name.toLowerCase().includes(name));
    //   setFilteredPlanets(planetsByName);
    // }
    const planetsByName = planets
      .filter((planet) => planet.name.toLowerCase().includes(name));
    setFilteredPlanets(planetsByName);
  }, [filters.filterByName, planets]);

  useEffect(() => {
    const { column, comparison, value } = filters.filterByNumericValues[0];

    if (comparison === 'maior que') {
      const filteredByComparison = planets
        .filter((planet) => {
          const columnValue = Number(planet[column]);
          return columnValue > Number(value);
        });
      setFilteredPlanets(filteredByComparison);
    }
    if (comparison === 'menor que') {
      const filteredByComparison = planets
        .filter((planet) => {
          const columnValue = Number(planet[column]);
          return columnValue < Number(value);
        });
      setFilteredPlanets(filteredByComparison);
    }
    if (comparison === 'igual a') {
      const filteredByComparison = planets
        .filter((planet) => {
          const columnValue = Number(planet[column]);
          return columnValue === Number(value);
        });
      setFilteredPlanets(filteredByComparison);
    }
  }, [filters.filterByNumericValues, planets]);

  const planetsValue = {
    planets,
    filteredPlanets,
    setName: (typedValue) => setFilters(
      { ...filters, filterByName: { name: typedValue } },
    ),
    filters,
    setNumericFilter: (column, comparison, value) => setFilters(
      { ...filters,
        filterByNumericValues: [{ column, comparison, value }],
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

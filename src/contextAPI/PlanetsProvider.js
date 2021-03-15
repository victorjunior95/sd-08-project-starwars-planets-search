import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

async function fetchPlanets(setter) {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(url);
  const newPlanets = await response.json();
  setter(newPlanets);
}

function planetFilter(planets, filtersState) {
  const { filters: { filterByName: { name } } } = filtersState;
  const filteredPlanets = planets.filter((planet) => planet.name.includes(name));
  return filteredPlanets;
}

const initializeStateOfFilters = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  },
  filterList: [
    {
      name: 'Population',
      id: 'population',
    },
    {
      name: 'Orbital Period',
      id: 'orbitalPeriod',
    },
    {
      name: 'Rotation Period',
      id: 'rotationPeriod',
    },
  ],
};

export default function PlanetsProvider({ children }) {
  const [planetsObject, setPlanets] = useState({
    results: [{ name: 'nothing', residents: 'noresidents' }],
  });
  const [filtersState, setFilter] = useState(initializeStateOfFilters);

  const { results: planets } = planetsObject;

  useEffect(() => {
    fetchPlanets(setPlanets);
  }, []);

  // const planetsFilteredByNames = planets.filter((value) => value.name.includes('Dag'));
  const filteredPlanets = planetFilter(planets, filtersState);

  const ProviderObject = {
    planets,
    filteredPlanets,
    filtersState,
    setFilter,
  };
  return (
    <PlanetsContext.Provider value={ ProviderObject }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

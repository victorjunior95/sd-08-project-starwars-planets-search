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
    filterByNumericValues: [],
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
    {
      name: 'Surface Water',
      id: 'surfaceWater',
    },
    {
      name: 'diameter',
      id: 'diameter',
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

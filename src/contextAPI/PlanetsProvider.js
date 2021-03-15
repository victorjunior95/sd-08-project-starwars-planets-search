import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

async function fetchPlanets(setter) {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(url);
  const newPlanets = await response.json();
  setter(newPlanets);
}

export default function PlanetsProvider({ children }) {
  const [planetsObject, setPlanets] = useState({
    results: [{ name: 'nothing', residents: 'noresidents' }],
  });
  const [filtersState, setFilter] = useState({
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
  });

  const { results: planets } = planetsObject;

  useEffect(() => {
    fetchPlanets(setPlanets);
  }, []);

  // const planetsFilteredByNames = planets.filter((value) => value.name.includes('Dag'));

  const ProviderObject = {
    planets,
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

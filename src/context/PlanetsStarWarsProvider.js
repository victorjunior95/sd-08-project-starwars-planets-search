import React, { useState } from 'react';
import propTypes from 'prop-types';
import PlanetsStarWarsContext from './PlanetsStarWarsContext';

function PlanetsStarWarsProvider({ children }) {
  const filtersObject = {
    filterByName: {
      name: '',
    },
  };

  const [planetsStarWars, setPlanetStarWars] = useState([]);
  const [planetsStarWarsAUX, setPlanetStarWarsAUX] = useState([]);
  const [filters, setFilters] = useState(filtersObject);

  const fetchAPI = async () => {
    const planetsStarWarsAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
    const planetsStarWarsJSON = await planetsStarWarsAPI.json();
    setPlanetStarWars(planetsStarWarsJSON.results);
    setPlanetStarWarsAUX(planetsStarWarsJSON.results);
  };

  const handleChange = ({ target }) => {
    setFilters({ ...filters, filterByName: target.value });
    const filtersPlanets = planetsStarWarsAUX
      .filter((planet) => planet.name.includes(target.value));
    setPlanetStarWars(filtersPlanets);
  };

  return (
    <PlanetsStarWarsContext.Provider
      value={ { planetsStarWars, filters, fetchAPI, handleChange } }
    >
      {children}
    </PlanetsStarWarsContext.Provider>
  );
}

PlanetsStarWarsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetsStarWarsProvider;

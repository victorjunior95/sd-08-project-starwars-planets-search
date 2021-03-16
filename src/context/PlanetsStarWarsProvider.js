import React, { useState } from 'react';
import propTypes from 'prop-types';
import PlanetsStarWarsContext from './PlanetsStarWarsContext';

function PlanetsStarWarsProvider({ children }) {
  const filtersObject = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{ column: 'population',
      comparison: 'maior que',
      value: '0' }],
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
    if (target.name === 'filterByName') {
      setFilters({ ...filters, filterByName: target.value });
      const filtersPlanets = planetsStarWarsAUX
        .filter((planet) => planet.name.includes(target.value));
      setPlanetStarWars(filtersPlanets);
    } else {
      setFilters({ ...filters,
        filterByNumericValues: [{ ...filters.filterByNumericValues[0],
          [target.name]: target.value }] });
    }
  };

  const clickButton = () => {
    const filterByNumber = filters.filterByNumericValues[0];
    if (filterByNumber.comparison === 'maior que') {
      const filtersLarger = planetsStarWarsAUX
        .filter((planet) => parseFloat(planet[filterByNumber.column])
        > parseFloat(filterByNumber.value));
      setPlanetStarWars(filtersLarger);
    } else if (filterByNumber.comparison === 'menor que') {
      const filtersSmaller = planetsStarWarsAUX
        .filter((planet) => parseFloat(planet[filterByNumber.column])
        < parseFloat(filterByNumber.value));
      setPlanetStarWars(filtersSmaller);
    } else if (filterByNumber.comparison === 'igual a') {
      const filtersEqual = planetsStarWarsAUX
        .filter((planet) => planet[filterByNumber.column] === filterByNumber.value);
      setPlanetStarWars(filtersEqual);
    }
  };
  return (
    <PlanetsStarWarsContext.Provider
      value={ { planetsStarWars, filters, fetchAPI, handleChange, clickButton } }
    >
      {children}
    </PlanetsStarWarsContext.Provider>
  );
}

PlanetsStarWarsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetsStarWarsProvider;

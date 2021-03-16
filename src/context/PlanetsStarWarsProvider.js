import React, { useState } from 'react';
import propTypes from 'prop-types';
import PlanetsStarWarsContext from './PlanetsStarWarsContext';

function PlanetsStarWarsProvider({ children }) {
  const filtersObject = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const filterByNumericObjetc = {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  };

  const [planetsStarWars, setPlanetStarWars] = useState([]);
  const [planetsStarWarsAUX, setPlanetStarWarsAUX] = useState([]);
  const [filters, setFilters] = useState(filtersObject);
  const [column, setColumn] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [filterNumeric, setFilterNumeric] = useState(filterByNumericObjetc);

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
      setFilterNumeric({ ...filterNumeric, [target.name]: target.value });
    }
  };

  const clickButton = () => {
    filters.filterByNumericValues.push(filterNumeric);
    column.splice(column.indexOf(filterNumeric.column), 1);
    setColumn(column);

    if (filterNumeric.comparison === 'maior que') {
      const filtersLarger = planetsStarWarsAUX
        .filter((planet) => parseFloat(planet[filterNumeric.column])
        > parseFloat(filterNumeric.value));
      setPlanetStarWars(filtersLarger);
    } else if (filterNumeric.comparison === 'menor que') {
      const filtersSmaller = planetsStarWarsAUX
        .filter((planet) => parseFloat(planet[filterNumeric.column])
        < parseFloat(filterNumeric.value));
      setPlanetStarWars(filtersSmaller);
    } else if (filterNumeric.comparison === 'igual a') {
      const filtersEqual = planetsStarWarsAUX
        .filter((planet) => planet[filterNumeric.column] === filterNumeric.value);
      setPlanetStarWars(filtersEqual);
    }
  };

  const filterDeleteButton = (index) => {
    column.push(filters.filterByNumericValues[index].column);
    filters.filterByNumericValues.splice(index, 1);
    setPlanetStarWars(planetsStarWarsAUX);
  };

  return (
    <PlanetsStarWarsContext.Provider
      value={ { planetsStarWars,
        filters,
        column,
        fetchAPI,
        handleChange,
        clickButton,
        filterDeleteButton } }
    >
      {children}
    </PlanetsStarWarsContext.Provider>
  );
}

PlanetsStarWarsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetsStarWarsProvider;

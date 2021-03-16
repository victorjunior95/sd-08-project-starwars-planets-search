import { useContext, useEffect, useState } from 'react';
import PlanetContext from '../contexts/PlanetContext';

const useFilter = () => {
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const {
    planetsList,
    filters,
  } = useContext(PlanetContext);

  const { filterByName: { name }, filterByNumericValues } = filters;

  useEffect(() => {
    if (name !== '') {
      setFilteredPlanets(planetsList.filter((planet) => planet.name.includes(name)));
    }
    if (filterByNumericValues.length > 0) {
      let filtered = [];
      filterByNumericValues.forEach((filter) => {
        if (filter.comparison === 'maior que') {
          filtered = [...filtered, planetsList
            .filter((planet) => (
              Number(planet[filter.column]) > Number(filter.value)))];
        }
        if (filter.comparison === 'menor que') {
          filtered = [...filtered, planetsList
            .filter((planet) => (
              Number(planet[filter.column]) < Number(filter.value)))];
        }
        if (filter.comparison === 'igual a') {
          filtered = [...filtered, planetsList
            .filter((planet) => (
              Number(planet[filter.column]) === Number(filter.value)))];
        }
      });
      setFilteredPlanets(...filtered);
    }
    if (name === '' && filterByNumericValues.length === 0) {
      setFilteredPlanets(planetsList);
    }
  }, [filterByNumericValues, filterByNumericValues.length, name, planetsList]);
  return [filteredPlanets, setFilteredPlanets];
};

export default useFilter;

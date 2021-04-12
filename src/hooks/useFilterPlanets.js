import { useState, useEffect } from 'react';

const useFilterPlanets = (planets, filters) => {
  const [filteredPlanets, setFilteredPlanets] = useState(planets);

  useEffect(() => {
    // console.log(planets);
    setFilteredPlanets(planets);
  }, [planets]);

  let newPlanetsList = filteredPlanets;

  const filterComparison = (planet, column, comparison, value) => {
    switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value); // parseInt() deve funcionar tb maybe...
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    default:
      break;
    }
  };

  if (filters.filterByNumericValues.status) {
    const { filterByNumericValues: { filtersArray } } = filters;

    filtersArray.forEach(({ column, comparison, value }) => {
      newPlanetsList = filteredPlanets
        .filter((planet) => filterComparison(planet, column, comparison, value));
    });
    console.log(newPlanetsList);
    // filteredPlanets.filter((planet) => filterComparison(planet, column, comparison, value));
  }

  // name.startsWith(filters.filterByName?.name) tb dava kinda
  newPlanetsList = newPlanetsList.filter(({ name }) => (
    name.includes(filters.filterByName.name)
  ));

  return newPlanetsList;
};

export default useFilterPlanets;

import { useState, useEffect } from 'react';

const useFilterPlanets = (planets, filters) => {
  const [filteredPlanets, setFilteredPlanets] = useState(planets);

  useEffect(() => {
    // console.log(planets);
    setFilteredPlanets(planets);
  }, [planets]);

  console.log(filters.length);

  if (filters.length === 0) return filteredPlanets;

  // name.startsWith(filters.filterByName?.name) tb dava kinda
  const newPlanetsList = filteredPlanets.filter(({ name }) => (
    name.includes(filters.filterByName.name)
  ));
  // console.log(newPlanetsList);

  return newPlanetsList;
};

export default useFilterPlanets;

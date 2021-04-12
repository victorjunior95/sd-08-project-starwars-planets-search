import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchPlanetsContext from './SearchPlanetsContext';
import getPlanetsStarWars from '../services/api';

const SearchPlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredNames, setFilteredNames] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      const objectAPI = await getPlanetsStarWars();
      const { results } = objectAPI;
      setPlanets(results);
      setFilteredNames(results);
      setIsLoaded(true);
    }
    fetchPlanets();
  }, []);

  function filterByName(input) {
    const planetsFiltered = planets.filter(
      ({ name }) => name.toLowerCase().includes(input.toLowerCase()),
    );
    setFilteredNames(planetsFiltered);
  }

  function filterByNumericValues({ column, comparison, value }) {
    const filteredPlanets = planets.filter((planet) => {
      const targetInfo = Number(planet[column]);
      const valueCompared = Number(value);
      if (comparison === 'menor que') {
        return targetInfo < valueCompared;
      }
      if (comparison === 'maior que') {
        return targetInfo > valueCompared;
      }
      return targetInfo === valueCompared;
    });
    // console.log(filteredPlanets);
    setFilteredNames(filteredPlanets);
  }

  const context = {
    planets,
    isLoaded,
    filteredNames,
    filterByName,
    filterByNumericValues,
  };

  return (
    <SearchPlanetsContext.Provider value={ context }>
      {children}
    </SearchPlanetsContext.Provider>
  );
};
SearchPlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SearchPlanetsProvider;

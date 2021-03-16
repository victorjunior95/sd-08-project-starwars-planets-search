import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';

function Provider({ children }) {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planets, setPlanets] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filterPlanet, setFilterPlanet] = useState([]);
  // const [column, setColumn] = useState('population');
  // const [comparison, setComparison] = useState('maior que');
  // const [numberValue, setNumberValue] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(url).then((response) => response.json());
      // console.log(results);
      setPlanets(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let filterPlanets = planets;
    filterPlanets = planets.filter((planet) => planet.name.includes((searchName)));
    setFilterPlanet(filterPlanets);
  }, [planets, searchName]);

  const filterName = (e) => {
    setSearchName(e.target.value);
  };

  // useEffect(() => {
  //   let filterOptions = planets;
  //   filterOptions = filterOptions.filter((planet) => planet.mood.includes((mood))
  //   && planet.type.includes((type)));
  //   setAllAnimals(filterOptions);
  //   return filterMoods;
  // }, [planets]);

  const filterColumn = (e) => {
    setColumn(e.target.value);
  };

  const filterComparison = (e) => {
    setComparison(e.target.value);
  };

  const filterNumberValue = (e) => {
    setNumberValue(e.target.value);
  };

  const data = {
    planets,
    filterColumn,
    filterComparison,
    filterNumberValue,
    searchName,
    filterPlanet,
    setPlanets,
    filterName,
  };

  return (
    <FilterContext.Provider value={ data }>
      { children }
    </FilterContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;

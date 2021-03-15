import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';

function Provider({ children }) {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [allPlanets, setPlanets] = useState([]);
  const [searchByName, setSearchName] = useState('');

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(url).then((response) => response.json());
      setPlanets(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log('aaa');
    let filterPlanets = allPlanets;
    filterPlanets = allPlanets.filter((planet) => planet.name.includes((searchByName)));
    setPlanets(filterPlanets);
    // return filterPlanets;
  }, [searchByName]);

  const filterByName = (e) => {
    setSearchName(e.target.value);
    // console.log(searchByName);
    // let filterPlanets = allPlanets;
    // filterPlanets = allPlanets.filter((planet) => planet.name.includes((searchByName)));
    // setPlanets(filterPlanets);
    // return filterPlanets;
  };

  const data = {
    allPlanets,
    searchByName,
    setPlanets,
    filterByName,
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

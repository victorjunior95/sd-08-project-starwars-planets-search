import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';

function Provider({ children }) {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planets, setPlanets] = useState([]);
  const [searchName, setSearchName] = useState('');

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
    setPlanets(filterPlanets);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchName]);

  const filterName = (e) => {
    setSearchName(e.target.value);
  };

  const data = {
    planets,
    searchName,
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

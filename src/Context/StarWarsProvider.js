import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filterPlanet, setFilterPlanet] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((res) => res.json());
      results.map((obj) => delete obj.residents);
      setPlanets(results);
    };
    fetchPlanets();
  }, []);

  const handleSearchName = ({ target }) => {
    setSearchName(target.value);
  };

  useEffect(() => {
    let filterPlanets = planets;
    filterPlanets = planets.filter((planet) => planet.name.includes((searchName)));
    setFilterPlanet(filterPlanets);
  }, [planets, searchName]);

  const data = {
    planets,
    setPlanets,
    searchName,
    setSearchName,
    filterPlanet,
    setFilterPlanet,
    handleSearchName,

  };

  return (
    <StarWarsContext.Provider value={ data }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default StarWarsProvider;

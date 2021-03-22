import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [nameSearch, setNameSearch] = useState('');
  const [planetFilter, setPlanetFilter] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endPoint).then((res) => res.json());
      results.map((object) => delete object.residents);
      setPlanets(results);
    };
    fetchPlanets();
  }, []);

  const handleNameSearch = ({ target }) => {
    setNameSearch(target.value);
  };

  useEffect(() => {
    let planetsFilter = planets;
    planetsFilter = planets.filter((planet) => planet.name.includes((nameSearch)));
    setPlanetFilter(planetsFilter);
  }, [planets, nameSearch]);

  const data = {
    planets,
    setPlanets,
    nameSearch,
    planetFilter,
    setPlanetFilter,
    handleNameSearch,
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

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './MyContext';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [searchName, setSearchName] = useState(' ');

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setPlanets(results);
    };
    fetchPlanets();
  }, []);

  const filterByName = (e) => {
    setSearchName(e.target.value);
    let filterPlanets = planets;
    filterPlanets = planets.filter((planet) => planet.name.includes((e.target.value)));
    setPlanets(filterPlanets);
    return filterPlanets;
  };

  const context = { planets, filterByName, searchName };
  return (
    <PlanetsContext.Provider value={ context }>
      {
        children
      }
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

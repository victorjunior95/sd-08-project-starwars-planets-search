import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './MyContext';

const PlanetsProvider = ({ children }) => {
  // const [fixPlanets, setFixPlanets] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [searchName, setSearchName] = useState(' ');

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setPlanets(results);
      // setFixPlanets(results);
    };
    fetchPlanets();
  }, []);

  // const filterByName = (e) => {
  // searchName = e.target.value;
  useEffect(() => {
    const filterPlanets = planets
      .filter((planet) => planet.name.includes((searchName)));
    setPlanets(filterPlanets);
    // return filterPlanets;
  }, [searchName]);

  const context = { planets, searchName, setSearchName };
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

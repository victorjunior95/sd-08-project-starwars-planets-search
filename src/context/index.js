import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './MyContext';

const PlanetsProvider = ({ children }) => {
  const [fixPlanets, setFixPlanets] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets';
      const { results } = await fetch(endpoint).then((response) => response.json());
      setFixPlanets(results);
      setPlanets(results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    let filterPlanets = '';
    filterPlanets = fixPlanets.filter((planet) => planet.name.includes((searchName)));
    setPlanets(filterPlanets);
  }, [fixPlanets, searchName]);

  const context = {
    planets,
    searchName,
    setSearchName,
  };

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

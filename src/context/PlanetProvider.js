import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

export const PlanetContext = createContext([]);

const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  // const [filteredCharacters,setFilteredCharacters] = useState([])
  // const [selectedCharacter, setSelectedCharacter] = useState({})

  useEffect(() => {
    const fetchPlanets = async () => {
      const planetsEndpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(planetsEndpoint).then((res) => res.json());
      setPlanets(results);
    };
    fetchPlanets();
  }, []);

  const data = {
    planets,
    // filteredPlanets,
    // filterPlanets: name => planetsFilter(name),
    // selectedPlanets,
    // selectPlanets: name => changeSelected(name),
  };

  return (
    <PlanetContext.Provider value={ data }>
      {
        children
      }
    </PlanetContext.Provider>
  );
};

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;

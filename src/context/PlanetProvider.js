import React, { useState, createContext, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

export const PlanetContext = createContext([]);

const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filters, setSearchName] = useState({ filterByName: { name: '' } });
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  // const [selectedCharacter, setSelectedCharacter] = useState({})

  useEffect(() => {
    const fetchPlanets = async () => {
      const planetsEndpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(planetsEndpoint).then((res) => res.json());
      setPlanets(results);
      setFilteredPlanets(results);
    };
    fetchPlanets();
  }, []);

  const saveFilter = (e) => {
    const inputName = e.target.name;
    setSearchName({ filterByName: { [inputName]: e.target.value } });
  };

  const filterWithName = useCallback(() => {
    const filtered = planets.filter(
      (planet) => planet.name.includes(filters.filterByName.name),
    );
    setFilteredPlanets(filtered);
  }, [filters.filterByName.name, planets]);

  useEffect(() => {
    filterWithName();
  }, [filters, filterWithName]);

  const data = {
    planets,
    filters,
    filteredPlanets,
    filterWithName,
    saveFilter,
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

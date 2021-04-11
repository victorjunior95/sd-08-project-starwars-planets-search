import React, { useState, createContext, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

export const PlanetContext = createContext([]);

const PlanetProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filterObject, setFilter] = useState({});
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterArray, setFilterArray] = useState([]);
  // const [selectedCharacter, setSelectedCharacter] = useState({})

  const columnsArray = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  useEffect(() => {
    const fetchPlanets = async () => {
      const planetsEndpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(planetsEndpoint).then((res) => res.json());
      setPlanets(results);
      setFilteredPlanets(results);
    };
    fetchPlanets();
  }, []);

  const filterWithName = useCallback(() => {
    const filtered = planets.filter(
      (planet) => planet.name.includes(name),
    );
    setFilteredPlanets(filtered);
  }, [name, planets]);

  useEffect(() => {
    filterWithName();
  }, [filterWithName]);

  const addFilter = () => {
    setFilterArray([...filterArray, filterObject]);
    setFilter({});
  };
  // let filterArray = [];
  // filter array de colunas, map filterArray

  const data = {
    planets,
    filters: {
      filterByName: name,
      filterByValue: filterArray,
    },
    filteredPlanets,
    filterWithName,
    setName,
    setFilter,
    filterObject,
    addFilter,
    columnsArray,
    filterArray,
    // filterWithValue,
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

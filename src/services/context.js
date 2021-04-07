import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const APIContext = createContext([]);

const ProviderAPI = ({ children }) => {
  const FILTERS_STRUCT = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  };

  const INITIAL_COLUMNS = [
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
    'population',
  ];

  const [filters, setFilters] = useState(FILTERS_STRUCT);
  const [columns, setColumns] = useState(INITIAL_COLUMNS);
  const [planetArray, setPlanetArray] = useState([]);
  const [filterArray, setFilterArray] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      const API = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(API);
      const { results } = await response.json();
      const planetList = results.map((item) => {
        (delete item.residents);
        return item;
      });
      // console.log(results);
      setPlanetArray(planetList);
      setFilterArray(planetList);
    };
    getAPI();
  }, []);

  function filteredPlanetsByName(planet) {
    const filteredPlanets = planetArray.length > 0 ? planetArray
      .filter((pnt) => pnt.name.toLowerCase().includes(planet.toLowerCase()))
      : [];
    setFilterArray(filteredPlanets);
  }
  const objData = {
    filterArray,
    filters,
    setFilters,
    filteredPlanetsByName,
    setColumns,
    columns,
  };

  return (
    <APIContext.Provider value={ objData }>
      { children}
    </APIContext.Provider>
  );
};

ProviderAPI.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderAPI;

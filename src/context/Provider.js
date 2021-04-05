import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';
import getApi from '../services/api';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    getApi().then((response) => setData(response));
  }, []);

  useEffect(() => {
    getApi().then((response) => setFilteredPlanets(response));
  }, []);

  const filterPlanetsByName = (textName) => {
    const filtered = data.filter(
      ({ name }) => name.toLowerCase().includes(textName.toLowerCase()),
    );
    setFilteredPlanets(filtered);
  };

  const filterPlanetsByNumericValues = ({ column, comparison, value }) => {
    const newFilter = data.filter((planet) => {
      console.log(planet[column]);
      const infoPlanet = planet[column];
      if (comparison === 'menor que') {
        return infoPlanet <= value;
      }
      if (comparison === 'maior que') {
        return infoPlanet >= value;
      }
      return infoPlanet === value;
    });
    setFilteredPlanets(newFilter);
  };

  const contextValue = {
    data,
    filteredPlanets,
    filterByName: (textName) => filterPlanetsByName(textName),
    filterByNumericValues: (filters) => filterPlanetsByNumericValues(filters),
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

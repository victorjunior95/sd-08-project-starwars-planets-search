import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/API_STAR_WARS';

function PlanetsProvider({ children }) {
  const [name, setName] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  const [storedPlanets, setStoredPlanets] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const apiResults = async () => {
      const results = await fetchPlanets();
      setStoredPlanets(results);
      setPlanets(results);
    };
    apiResults();
  }, []);

  useEffect(() => {
    const filterPlanets = storedPlanets.filter((planet) => planet.name.includes(name));
    setPlanets(filterPlanets);
  }, [name]);

  const provide = {
    filters: {
      filterByName: {
        name,
      },
    },
    function: {
      handleChange,
    },
    planets,
  };

  return (
    <PlanetsContext.Provider value={ provide }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

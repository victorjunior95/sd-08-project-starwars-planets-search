import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/fetchPlanet';

function StarWarsProvider({ children }) {
  const [SWPlanets, setSWPlanets] = useState([]);
  const contextValueSW = {
    SWPlanets,
    setSWPlanets,
  };

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchPlanets();
      results.forEach((item) => delete item.residents);
      setSWPlanets(results);
    };
    getPlanets();
  }, []);

  return (
    <main>
      <StarWarsContext.Provider value={ contextValueSW }>
        {children}
      </StarWarsContext.Provider>
    </main>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

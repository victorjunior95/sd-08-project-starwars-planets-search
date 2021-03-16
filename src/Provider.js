import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const ProviderPlanet = ({ children }) => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planetas, setPlanetas] = useState([]);

  useEffect(() => {
    async function fechtData() {
      const { results } = await fetch(url).then((res) => res.json());
      setPlanetas(results);
    }
    fechtData();
  }, []);

  const data = {
    planetas,
  };

  return (
    <Context.Provider value={ data }>
      { children }
    </Context.Provider>
  );
};

ProviderPlanet.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default ProviderPlanet;

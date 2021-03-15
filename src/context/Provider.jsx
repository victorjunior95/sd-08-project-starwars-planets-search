import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets';

function getPlanetsAPI() {
  return fetch(URL).then((response) => (
    response.ok
      ? response.json()
      : Promise.reject(new Error('error'))
  ));
}

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPlanetsAPI().then(({ results }) => {
      results.forEach((result) => delete result.residents);
      setData(results);
    });
  }, []);

  const context = {
    data,
  };

  return (
    <Context.Provider value={ context }>
      { children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const returnAPI = await axios('https://swapi-trybe.herokuapp.com/api/planets/');
      setData(returnAPI.data.results);
    })();
  }, []);

  const context = {
    data,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const APIContext = createContext([]);

const ProviderAPI = ({ children }) => {
  const [planetArray, setPlanetArray] = useState([]);
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
    };
    getAPI();
  }, []);
  const objData = {
    planetArray,
  };

  return (
    <APIContext.Provider value={ objData }>
      { children }
    </APIContext.Provider>
  );
};

ProviderAPI.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderAPI;

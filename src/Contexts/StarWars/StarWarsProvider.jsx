import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanet from '../../Services/starWarsAPI';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanet().then((items) => {
      items.forEach((item) => delete item.residents);
      setPlanets(items);
    });
  }, []);

  return (
    <StarWarsContext.Provider value={ planets }>{ children }</StarWarsContext.Provider>
  );
};
StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default StarWarsProvider;

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanet from '../../Services/starWarsAPI';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    getPlanet().then((items) => {
      items.forEach((item) => delete item.residents);
      setPlanets(items);
    });
  }, []);

  const filters = {
    filters: {
      filtersByName: {
        name,
      },
    },
  };

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        ...filters,
        setName,
      } }
    >
      { children }
    </StarWarsContext.Provider>
  );
};
StarWarsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default StarWarsProvider;

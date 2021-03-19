import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanet from '../../Services/starWarsAPI';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filtersByNumericValues, setFiltersByNumericValues] = useState([]);

  useEffect(() => {
    getPlanet().then((items) => {
      items.forEach((item) => delete item.residents);
      setPlanets(items);
    });
  }, []);

  const filters = {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: filtersByNumericValues,
    },
  };

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        ...filters,
        setName,
        setFiltersByNumericValues,
      } }
    >
      { children }
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default StarWarsProvider;

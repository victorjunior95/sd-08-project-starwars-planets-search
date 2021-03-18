import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanet from '../../Services/starWarsAPI';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

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
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    },
  };

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        ...filters,
        setName,
        setColumn,
        setComparison,
        setValue,
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

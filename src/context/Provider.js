import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isFetching, setFetching] = useState(true);
  const [filterByName, setName] = useState('');
  const [filterByNumericValue, setNumericValue] = useState([]);

  const handleFilterName = ({ target }) => {
    setName(target.value);
  };

  const removeFilter = (value) => {
    const newState = filterByNumericValue.filter(({ column }) => column !== value);
    console.log(newState);
    setNumericValue(newState, value);
  };

  const addNumericFilter = (column, comparision, value) => {
    setNumericValue(
      [...filterByNumericValue,
        {
          column,
          comparision,
          value,
        },
      ],
    );
  };

  const requestPlanets = async () => {
    try {
      const { results } = await fetch(
        'https://swapi-trybe.herokuapp.com/api/planets/',
      ).then((r) => r.json());

      setPlanets(results);
    } catch (error) {
      return error;
    }
    setFetching(false);
  };

  const context = { planets,
    isFetching,
    filterByName,
    handleFilterName,
    filterByNumericValue,
    addNumericFilter,
    removeFilter,
  };

  useEffect(() => {
    requestPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;

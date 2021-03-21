import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';

const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const SWProvider = ({ children }) => {
  const [resultsAPI, setResultsAPI] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [compareOptions, setToCompareOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  useEffect(() => {
    async function fetching() {
      const { results } = await fetch(API_URL)
        .then((response) => response.json()).catch((e) => console.log(e));
      return setResultsAPI(results);
    }
    fetching();
  }, []);

  useEffect(() => {
    const noResidents = (resultsAPI
      .filter((element) => delete element.residents));
    setPlanets(noResidents);
  }, [resultsAPI]);

  handleSearchInput = ({ target: { value } }) => setSearchInput(value);

  const SWProviderStates = {
    resultsAPI, planets, setPlanets, searchInput, handleSearchInput, compareOptions, setToCompareOptions,
  };

  return (
    <SWContext.Provider value={ SWProviderStates }>
      {children}
    </SWContext.Provider>
  );
};

SWProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SWProvider;

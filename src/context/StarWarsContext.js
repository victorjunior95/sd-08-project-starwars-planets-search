import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext([]);

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [inputText, setInputText] = useState('');
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchUrl = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((response) => response.json());
      setPlanets(results);
    };
    fetchUrl();
  }, []);

  useEffect(() => {
    const filterPlanets = planets.filter((planet) => planet.name.includes((inputText)));
    setFilters(filterPlanets);
  }, [planets, inputText]);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const contextValue = {
    planets,
    inputText,
    filters,
    setPlanets,
    handleChange,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

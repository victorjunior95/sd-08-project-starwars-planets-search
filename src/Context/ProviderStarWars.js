import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextStarWars from './ContextStarWars';

function ProviderStarWars({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [inputName, setInputName] = useState('');
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: {
      column: 'population',
      comparison: 'maior que',
      value: '',
    },
  });

  const [columnSelect, setColumnSelect] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  useEffect(() => {
    const fetchStarWarsAPI = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const dataInfo = await fetch(endpoint);
      const dataJson = await dataInfo.json();
      const { results } = dataJson;
      const dataPlanet = results;
      // console.log(dataJson);
      // console.log(dataPlanet);
      setPlanets(dataPlanet);
      setFilteredPlanets(dataPlanet);
    };
    fetchStarWarsAPI();
  }, []);

  useEffect(() => {
    const FilterEf = planets.filter(({ name }) => name.toLowerCase().includes(inputName));
    // console.log(filter);
    // if (!filter) setFilteredPlanets(planets);
    setFilteredPlanets(FilterEf);
  }, [planets, inputName]);

  const handleInputName = (e) => {
    setInputName(e.target.value);
    // filterPlanets(inputName);
    // console.log('!');
  };

  const handleSelect = ({ target: { name, value } }) => {
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const allContext = {
    planets,
    filteredPlanets,
    setFilteredPlanets,
    filter,
    setFilter,
    handleInputName,
    inputName,
    columnSelect,
    handleSelect,
  };

  return (
    <ContextStarWars.Provider value={ allContext }>
      { children }
    </ContextStarWars.Provider>
  );
}

ProviderStarWars.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderStarWars;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

const filterFields = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

export default function StarwarsProvider({ children }) {
  const [tables, setTables] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState(filterFields);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((data) => setPlanets(data.results));
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log(filters.filterByNumericValues);

  useEffect(() => {
    const result = planets.filter((item) => item.name.toLowerCase().includes(searchTerm));
    setTables(result);
  }, [searchTerm, planets]);

  const context = {
    tables,
    setTables,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    handleChange,
    planets,
    setPlanets,
  };

  return (
    <StarwarsContext.Provider value={ context }>
      { children }
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

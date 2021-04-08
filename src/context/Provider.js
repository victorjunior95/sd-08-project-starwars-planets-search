import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/getPlanets';

const filterState = {
  filterByName: {
    text: '',
  },
};

const arrOptions = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];
function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState(filterState);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [numFilter, setNumFilter] = useState([]);
  const [countClick, setCountClick] = useState([]);
  const [arrColumns, setArrColumns] = useState(arrOptions);

  async function fetchPlanets() {
    const planets = await getPlanets();
    setData(planets);
    setIsLoading(true);
  }

  useEffect(() => {
    const { filterByName: { text } } = filters;
    const filtered = data.filter((item) => item.name.includes(text));
    setFilteredPlanets(filtered);
    if (arrColumns === undefined) {
      setArrColumns(arrOptions);
    }
  }, [data, filters, arrColumns]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    numFilter.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        return setFilteredPlanets(data.filter((planet) => +planet[column] > +value));
      }
      if (comparison === 'igual a') {
        return setFilteredPlanets(data.filter((planet) => +planet[column] === +value));
      }
      if (comparison === 'menor que') {
        return setFilteredPlanets(data.filter((planet) => +planet[column] < +value));
      }
    });
  },
  [data, numFilter]);

  const contextValue = {
    data,
    isLoading,
    filters,
    setFilters,
    filteredPlanets,
    numFilter,
    setNumFilter,
    countClick,
    setCountClick,
    arrColumns,
    setArrColumns,

  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

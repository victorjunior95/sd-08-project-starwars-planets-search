import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { getStarWarsAPI } from '../services/StarWarsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterPlanet, setFilterPlanet] = useState('');
  const [removed, setRemoved] = useState(false);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  const functionLength = (filterLength) => {
    if (filterLength === 1) {
      filterLength = 0;
    }
    if (filterLength > 1) {
      filterLength -= 2;
    }
    return filterLength;
  };

  const filterByNumericValuesFunc = (dataFiltered, column, comparison, value) => {
    let filtered;
    if (comparison === 'maior que') {
      filtered = dataFiltered.filter((elem) => elem[column] > parseInt(value, 10));
      dataFiltered = filtered;
    }
    if (comparison === 'menor que') {
      filtered = dataFiltered.filter((elem) => elem[column] < parseInt(value, 10));
      dataFiltered = filtered;
    }
    if (comparison === 'igual a') {
      filtered = dataFiltered.filter((elem) => elem[column] === value);
      dataFiltered = filtered;
    }
    return filtered;
  };

  const [columns, setColumns] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  useEffect(() => {
    async function fetchData() {
      const response = await getStarWarsAPI();
      setData(response.results);
    }
    fetchData();
  }, []);

  const context = {
    data,
    filters,
    setFilter,
    functionLength,
    columns,
    setColumns,
    filterByNumericValuesFunc,
    filterPlanet,
    setFilterPlanet,
    removed,
    setRemoved,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

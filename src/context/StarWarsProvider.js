import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const standardFilter = {
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
};

function StarWarsProvider({ children }) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filters, setFilteredData] = useState(standardFilter);

  const setName = (name) => {
    setFilteredData((previousState) => ({
      ...previousState,
      filterByName: {
        name,
      },
    }));
  };

  // const setNumericValues = (column, comparison, value) => {
  //   setFilteredData((previousState) => ({
  //     ...previousState,
  //     filterByNumericValues: [
  //       {
  //         column,
  //         comparison,
  //         value,
  //       },
  //     ],
  //   }));
  // };

  useEffect(() => {
    async function returnedAPI() {
      setIsFetching(true);
      const planetResponse = await fetch(
        'https://swapi-trybe.herokuapp.com/api/planets/',
      );
      const planetResponseJson = await planetResponse.json();
      setData(planetResponseJson.results);
    }
    returnedAPI();
    setIsFetching(false);
  }, []);

  const contextValue = {
    isFetching,
    data,
    searchName,
    setSearchName,
    filters,
    setFilteredData,
    setName,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;

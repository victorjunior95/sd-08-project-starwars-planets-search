import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const standardFilter = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
  ],
};

function StarWarsProvider({ children }) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filters, setFilteredData] = useState(standardFilter);
  const [allFilteredNumbers, setAllFilteredNumbers] = useState('');

  const setName = (name) => {
    setFilteredData((previousState) => ({
      ...previousState,
      filterByName: {
        name,
      },
    }));
  };

  const addFilterNumericValue = (column, comparison, value) => {
    setFilteredData((previousState) => ({
      ...previousState,
      filterByNumericValues: [...previousState.filterByNumericValues, {
        column,
        comparison,
        value,
      }],
    }));
  };

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

  // useEffect(() => {
  //   const { filterByName: { name }, filterByNumericValues} = filters;
  //   const filteredData3 = data
  //   .filter((value) => value.name.toLowerCase().includes(name.toLowerCase()));
    
  //   const result3 = filterByNumericValues.map((filtered)=> filteredData3.filter((element)=>element[filtered.column]>filtered.value)
  //   );

  //   // console.log(result3[result3.length-1]);
  // },[filters])


  const contextValue = {
    isFetching,
    data,
    searchName,
    setSearchName,
    filters,
    setFilteredData,
    setName,
    addFilterNumericValue,
    allFilteredNumbers,
    setAllFilteredNumbers,
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

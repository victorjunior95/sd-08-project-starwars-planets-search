import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/planetsApi';

const standardFilter = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

function StarWarsProvider({ children }) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  const [dataForRendering, setDataForRendering] = useState([]);
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
      filterByNumericValues: [
        ...previousState.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    }));
  };

  useEffect(() => {
    async function returnedAPI() {
      setIsFetching(true);
      const planetResponseJson = await getPlanets();
      planetResponseJson.forEach((planet) => delete planet.residents);
      setData(planetResponseJson);
      setDataForRendering(planetResponseJson)
    }
    returnedAPI();
    setIsFetching(false);
  }, []);

  useEffect(() => {
    console.log('novoUseEffect');
    const {
      filterByName: { name },
    } = filters;
    const filteredName = data.filter((planetName) =>
      planetName.name.toLowerCase().includes(name.toLocaleLowerCase())
    );
    setDataForRendering(filteredName);
  }, [filters]);

  console.log(dataForRendering);

  useEffect(() => {
    const {
      filterByName: { name },
      filterByNumericValues,
    } = filters;
    // console.log(data);
    const filteredData3 = data.filter((value) =>
      value.name.toLowerCase().includes(name.toLowerCase())
    );
    setAllFilteredNumbers(filteredData3);
    filterByNumericValues.forEach((element) => {
      const { column, comparison, value } = element;
      switch (comparison) {
        case 'maior que':
          const greaterThan = data
            .filter((planet) => parseInt(planet[column]) > parseInt(value))
            .filter((word) =>
              word.name.toLowerCase().includes(name.toLowerCase())
            );
          setAllFilteredNumbers(greaterThan);
          return greaterThan;
        case 'menor que':
          const smallerThan = data
            .filter((planet) => parseInt(planet[column]) < parseInt(value))
            .filter((word) =>
              word.name.toLowerCase().includes(name.toLowerCase())
            );
          setAllFilteredNumbers(smallerThan);
          return smallerThan;
        case 'igual a':
          const equalTo = data
            .filter((planet) => planet[column] === value)
            .filter((word) =>
              word.name.toLowerCase().includes(name.toLowerCase())
            );
          setAllFilteredNumbers(equalTo);
          return equalTo;
        default:
          setAllFilteredNumbers(filteredData3);
          return filteredData3;
      }
    });
  }, [data, filters]);

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
    dataForRendering,
    setDataForRendering
  };

  return (
    <StarWarsContext.Provider value={contextValue}>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;

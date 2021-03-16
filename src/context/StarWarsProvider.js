import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsApi from '../services/planetsApi';

function StarWarsProvider({children}) {

  const [ isFetching, setIsFetching ] = useState(false);
  const [ data, setData] = useState([]);
  const [ searchName, setSearchName] = useState('');
  const [filteredData, setFilteredData]  = useState({fiters: { filterByName: { name: ''}}});


  // const fetchPlanetsApi = async () => {
  //   setIsFetching(true);
  //   const getPlanetsFromAPI = await planetsApi();
  //   setData(getPlanetsFromAPI.results);
  //   setIsFetching(false)
  // }

    useEffect( () => {
    async function returnedAPI() {
      setIsFetching(true);
      const planetResponse = await fetch('https://swapi-trybe.herokuapp.com/api/planets/'); 
      const planetResponseJson = await planetResponse.json();
      setData(planetResponseJson.results);
      return planetResponseJson;
    }
    returnedAPI();
    setIsFetching(false);
  }, [])

  const contextValue = { 
    isFetching,
    data,
    // fetchPlanetsApi,
    searchName,
    setSearchName,
    filteredData,
    setFilteredData,
  };

  return (
      <StarWarsContext.Provider
        value={ contextValue }
      >
        { children }
      </StarWarsContext.Provider>
    );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;

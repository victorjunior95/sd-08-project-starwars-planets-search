import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsApi from '../services/planetsApi';

function StarWarsProvider({children}) {

  const [ isFetching, setIsFetching ] = useState(false);
  const [ data, setData] = useState([]);
  const [filteredData, setFilteredData]  = useState('');

  const [searchName, setSearchName] = useState('');

  const fetchPlanetsApi = async () => {
    setIsFetching(true);
    const getPlanetsFromAPI = await planetsApi();
    setData(getPlanetsFromAPI.results);
    setIsFetching(false)
  }

  const contextValue = { 
    isFetching,
    data,
    fetchPlanetsApi,
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

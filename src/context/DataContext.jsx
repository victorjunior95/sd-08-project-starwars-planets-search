import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const DateContext = createContext([]);

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  // const [selectedData, setSelectedData] = useState({});

  // const changeSelectedData = (name)=> {

  // }

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endpoint).then((res) => res.json());
      setData(results);
    };
    fetchData();
  }, []);

  return (
    <DateContext.Provider value={ data }>
      {
        children
      }

    </DateContext.Provider>
  );
};

export default DataProvider;

DataProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  // this.state = { data: [] }
  // this.setState({ data: [100] })

  // useState -> criar 'states'
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [titles, setTitles] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const planetsAPI = async () => {
    const { results } = await fetch(endpoint).then((response) => response.json());
    results.map((result) => delete result.residents);

    setAllData(results);
    setTitles(Object.keys(results[0]));
  };

  // useEffect -> aqui, similar ao 'componentDidMount'
  useEffect(() => {
    planetsAPI();
  }, []);

  const filterName = (value) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const { name } = filters.filterByName;
  // useEffect -> aqui, similar ao 'componentDidUpdate'
  useEffect(() => {
    const filterData = allData.filter((array) => array.name.includes(name));

    setData(filterData);
  }, [allData, name]);

  const context = {
    data,
    titles,
    filterName,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;

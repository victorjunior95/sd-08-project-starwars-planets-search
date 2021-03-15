import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  // this.state = { data: [] }
  // this.setState({ data: [100] })

  // useState -> criar 'states'
  const [data, setData] = useState([]);
  const [titles, setTitles] = useState([]);

  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const planetsAPI = async () => {
    const { results } = await fetch(endpoint).then((response) => response.json());
    results.map((result) => delete result.residents);

    setData(results);
    setTitles(Object.keys(results[0]));
  };

  // useEffect -> aqui, similar ao 'componentDidMount'
  useEffect(() => {
    planetsAPI();
  }, []);

  const context = {
    data,
    titles,
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

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  // Simula componentDidMount() das classes
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      // .then((dataResults) => console.log(dataResults.results));
      .then((dataResults) => setData(dataResults.results));
  }, []);

  // Simula componentDidUpdate() das classes
  useEffect(() => {
    // console.log('Atualizado');
    const { filterByName: { name } } = filters;
    const filter = data.filter((planet) => planet.name.includes(name));
    setPlanets(filter);
  }, [data, filters]);

  const context = {
    planets,
    setPlanets,
    filters,
    setFilters,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  // https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
  children: PropTypes.node.isRequired,
};

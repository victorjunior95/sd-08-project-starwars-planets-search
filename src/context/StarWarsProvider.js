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
    filterByNumericValues: {
      column: 'population',
      comparison: 'maior que',
      value: 0,
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
    const {
      filterByName: { name },
      filterByNumericValues: { column, comparison, value },
    } = filters;

    const filter = data.filter((planet) => {
      const includesName = planet.name.includes(name);

      switch (comparison) {
      case ('maior que'):
        return Number(planet[column]) > Number((value)) && includesName;
      case ('menor que'):
        return Number(planet[column]) < Number(value) && includesName;
      case ('igual a'):
        return Number(planet[column]) === Number(value) && includesName;
      default:
        return includesName;
      }
    });

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

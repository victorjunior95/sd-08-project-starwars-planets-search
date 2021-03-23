import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getData from '../api/getData';

export const savePlanet = createContext();

function PlanetContext({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [searchByName, setSearchByName] = useState([]);

  const [options, setOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [height, setHeight] = useState(['maior que', 'menor que', 'igual a']);
  const [filters, setFilter] = useState({
    column: 'population',
    compare: 'maior que',
    value: '100000',
  });

  useEffect(() => {
    async function effect() {
      const planetsList = await getData();
      setPlanets(planetsList);
      setFilteredPlanets(planetsList);
    }
    effect();
  }, []);

  useEffect(() => {
    let nameFilter = [];
    nameFilter = planets.filter((planet) => planet.name.includes((searchByName)));
    setFilteredPlanets(nameFilter);
  }, [planets, searchByName]);

  const filterOption = (e) => {
    const attribute = e.target.getAttribute('data-testid');
    if (attribute === 'column-filter') {
      setFilter({ ...filters, column: e.target.value });
    } else if (attribute === 'comparison-filter') {
      setFilter({ ...filters, compare: e.target.value });
    } else {
      setFilter({ ...filters, value: e.target.value });
    }
  };

  // Função baseada no código de Jean P. Franco
  const compareFilter = ({ column, compare, value }) => {
    const getFilter = planets.filter((planet) => {
      const optionValue = Number(planet[column]);
      const valueToCompare = Number(value);
      if (compare === 'menor que') {
        return optionValue < valueToCompare;
      }
      if (compare === 'maior que') {
        return optionValue > valueToCompare;
      }
      return optionValue === valueToCompare;
    });
    setFilteredPlanets(getFilter);
  };

  const handleClick = () => {
    const lastOptions = [...options];
    const selectedOption = filters.column;
    const indexOption = lastOptions.indexOf(selectedOption);
    lastOptions.splice(indexOption, 1);
    setOptions(lastOptions);
    compareFilter(filters);
  };

  const data = {
    searchByName,
    setSearchByName,
    filteredPlanets,
    options,
    height,
    setHeight,
    filterOption,
    handleClick,
  };

  return (
    <savePlanet.Provider value={ data }>
      { children }
    </savePlanet.Provider>
  );
}

PlanetContext.propTypes = {
  children: PropTypes.oneOfType.isRequired,
};

export default PlanetContext;

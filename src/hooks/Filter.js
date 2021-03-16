import { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../provider/StarWarsContext';

function FilterName(data, value) {
  if (!value) return data;
  const result = data.filter((el) => {
    if (el.name.includes(value)) return el;
    return '';
  });
  return result;
}

function switchFilter({ column, comparison, value }, planet) {
  if (planet[column] === 'unknown') return '';
  if (comparison === 'maior que' && Number(planet[column]) > Number(value)) {
    return planet;
  }
  if (comparison === 'menor que' && Number(planet[column]) < Number(value)) {
    return planet;
  }
  if (comparison === 'igual a' && Number(planet[column]) === Number(value)) {
    return planet;
  }
  return '';
}

function FilterByColumn(planets, setFilter) {
  let result = [...planets];
  if (setFilter.length === 0) return planets;
  setFilter.forEach((el) => {
    const planetsFilter = result.filter((planet) => switchFilter(el, planet));
    result = [...planetsFilter];
  });
  return result;
}

function Filter() {
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
  } = useContext(StarWarsContext);

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets(data);
  }, [data]);

  useEffect(() => {
    const planetsFilterName = FilterName(data, name);
    const planetsFilterNumeric = FilterByColumn(planetsFilterName, filterByNumericValues);
    setPlanets(planetsFilterNumeric);
  }, [data, filterByNumericValues, name]);

  return [planets];
}

export default Filter;

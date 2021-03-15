import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName: { name } } = filters;
  const { filterByNumericValues: [{ column, comparison, value }] } = filters;
  let teste;
  const filteringByName = data.filter((elem) => elem.name.includes(name));
  let dataFiltered;
  if (name === '') {
    dataFiltered = data;
  } else {
    dataFiltered = filteringByName;
  }
  if (comparison === 'maior que') {
    teste = dataFiltered.filter((elem) => elem[column] > parseInt(value, 10));
    dataFiltered = teste;
  }
  if (comparison === 'menor que') {
    teste = dataFiltered.filter((elem) => elem[column] < parseInt(value, 10));
    dataFiltered = teste;
  }
  if (comparison === 'igual a') {
    teste = dataFiltered.filter((elem) => elem[column] === value);
    dataFiltered = teste;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Population</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {dataFiltered.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.population}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

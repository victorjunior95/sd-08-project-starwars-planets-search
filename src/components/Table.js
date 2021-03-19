import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContex';

const Table = () => {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName: { name } } = filters;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter((planet) => planet.name.includes(name))
          .filter((planet) => { // créditos ao Julio Kauer da minha antiga turma 07 que me ajudou a desenvolver esse filtro;
            let match = true;
            const { filterByNumericValues } = filters;
            if (filterByNumericValues === []) return true;
            filterByNumericValues.forEach((currFilter) => {
              switch (currFilter.comparison) {
              case 'maior que':
                match = match && parseFloat(planet[currFilter.column]) > currFilter.value;
                break;
              case 'menor que':
                match = match && parseFloat(planet[currFilter.column]) < currFilter.value;
                break;
              case 'igual a':
                match = match && planet[currFilter.column] === currFilter.value;
                break;
              default:
                match = true;
              }
            });
            return match;
          })
          .map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;

import React, { useContext } from 'react';
import PlanetsContext from '../Context/PlanetsContext';

function Table() {
  const { allPlanets } = useContext(PlanetsContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>orbital_period</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {allPlanets.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function TableListPlanets() {
  const { data, descriptions } = useContext(PlanetsContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {descriptions
              .filter((element) => element !== 'residents')
              .map((description, index) => (
                <th
                  key={ index }
                  data-testid="column-sort"
                >
                  {description}
                </th>))}
          </tr>
        </thead>
        <tbody>
          { data.map((planet, index) => (
            <tr key={ index }>
              <td data-testid="planet-name">{planet.name}</td>
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
    </div>
  );
}

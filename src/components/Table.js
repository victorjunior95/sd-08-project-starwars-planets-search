import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const HEADER_LIST_DESCRIPTIONS_PLANETS = ['Name', 'Rotation Period', 'Orbital Period',
  'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
  'Population', 'Films', 'Created', 'Edited', 'URL'];

export default function TableListPlanets() {
  const { listPlanets } = useContext(PlanetsContext);
  return (
    <table>
      <thead>
        <tr>
          {HEADER_LIST_DESCRIPTIONS_PLANETS.map((description, index) => (
            <th key={ index }>
              {description}
            </th>)) }
        </tr>
      </thead>
      <tbody>
        { listPlanets.map((planet) => (
          <tr key={ planet.name }>
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
  );
}

import React, { useContext } from 'react';
import SearchPlanetsContext from '../context/SearchPlanetsContext';

function Table() {
  const { planets } = useContext(SearchPlanetsContext);
  return (
    <>
      <p>SóBora!</p>
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
            <th>URL</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {
            planets.map((planet) => (
              <tr key={ planet.name }>
                <th data-testid="planet-name">{planet.name}</th>
                <th>{planet.rotation_period}</th>
                <th>{planet.orbital_period}</th>
                <th>{planet.diameter}</th>
                <th>{planet.climate}</th>
                <th>{planet.gravity}</th>
                <th>{planet.terrain}</th>
                <th>{planet.surface_water}</th>
                <th>{planet.population}</th>
                <th>{planet.films}</th>
                <th>{planet.url}</th>
                <th>{planet.created}</th>
                <th>{planet.edited}</th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default Table;

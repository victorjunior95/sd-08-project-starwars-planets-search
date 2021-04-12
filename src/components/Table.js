import React, { useContext } from 'react';
import { PlanetContext } from '../context/PlanetProvider';
import ColumnFilterButton from './ColumnFilterButton';

export default function Table() {
  const finalFilter = (planets, filter) => {
    switch (filter.comparison) {
    case 'maior que':
      return planets.filter((planet) => parseFloat(planet[filter.column]) > filter.value);
    case 'menor que':
      return planets.filter((planet) => planet[filter.column] < filter.value
      || planet[filter.column] === 'unknown');
    case 'igual a':
      return planets.filter((planet) => planet[filter.column] === filter.value);
    default:
      return planets;
    }
  };
  const { filteredPlanets, filterArray } = useContext(PlanetContext);
  const invalidColumns = filterArray.map((item) => item.column);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th data-testid="filter">
            Rotation Period
            {
              invalidColumns.includes('rotation_period') ? <ColumnFilterButton
                columnValue="rotation_period"
              /> : ''
            }
          </th>
          <th data-testid="filter">
            Orbital Period
            {
              invalidColumns.includes('orbital_period') ? <ColumnFilterButton
                columnValue="orbital_period"
              /> : ''
            }
          </th>
          <th data-testid="filter">
            Diameter
            {
              invalidColumns.includes('diameter') ? <ColumnFilterButton
                columnValue="diameter"
              /> : ''
            }
          </th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th data-testid="filter">
            Surface Water
            {
              invalidColumns.includes('surface_water') ? <ColumnFilterButton
                columnValue="surface_water"
              /> : ''
            }
          </th>
          <th data-testid="filter">
            Population
            {
              invalidColumns.includes('population') ? <ColumnFilterButton
                columnValue="population"
              /> : ''
            }
          </th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { filterArray.reduce(finalFilter, filteredPlanets)
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
}

import React, { useContext } from 'react';
import { DataContext } from '../API/DataContext';

const Table = () => {
  const { filterName, searchName, filterPlanet } = useContext(DataContext);

  return (
    <>
      <p>Search Planet</p>
      <input
        type="text"
        data-testid="name-filter"
        id="search"
        onChange={ filterName }
        value={ searchName }
      />
      <table id="lista">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Created</th>
            <th>Orbital Period</th>
            <th>Edited</th>
            <th>Diameter</th>
            <th>Url</th>
            <th>Climate</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {
            filterPlanet.map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.created}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.edited}</td>
                <td>{planet.diameter}</td>
                <td>{planet.url}</td>
                <td>{planet.climate}</td>
                <td>{planet.films}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};

export default Table;

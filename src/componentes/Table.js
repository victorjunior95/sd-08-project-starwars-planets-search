import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { data } = useContext(AppContext);
  const renderPlanets = (planets) => (
    <tr key={ planets.name }>
      <td>{planets.name}</td>
      <td>{planets.rotation_period}</td>
      <td>{planets.orbital_period}</td>
      <td>{planets.diameter}</td>
      <td>{planets.climate}</td>
      <td>{planets.gravity}</td>
      <td>{planets.terrain}</td>
      <td>{planets.surface_water}</td>
      <td>{planets.population}</td>
      <td>{planets.films}</td>
      <td>{planets.created}</td>
      <td>{planets.edited}</td>
      <td>{planets.url}</td>
    </tr>
  );

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planets) => renderPlanets(planets))}
      </tbody>
    </table>
  );
}

export default Table;

import React, { useContext } from 'react';
import { APIContext } from '../services/context';

export default function Table() {
  const { filterArray } = useContext(APIContext);
  // const { filterByNumericValues } = filters;
  // applyFilter();
  return (
    <table>
      {console.log(filterArray)}
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
        {filterArray.map((array) => (
          <tr key={ array.name }>
            <td>{array.name}</td>
            <td>{array.rotation_period}</td>
            <td>{array.orbital_period}</td>
            <td>{array.diameter}</td>
            <td>{array.climate}</td>
            <td>{array.gravity}</td>
            <td>{array.terrain}</td>
            <td>{array.surface_water}</td>
            <td>{array.population}</td>
            <td>{array.films}</td>
            <td>{array.created}</td>
            <td>{array.edited}</td>
            <td>{array.url}</td>
          </tr>
        ))}

      </tbody>

    </table>
  );
}

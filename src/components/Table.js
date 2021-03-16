import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Table() {
  const { filterName, searchName, filterPlanet } = useContext(FilterContext);
  return (
    <div>
      <label htmlFor="Name">
        Name:
        <input
          data-testid="name-filter"
          type="text"
          onChange={ filterName }
          value={ searchName }
        />
      </label>
      <select data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option value="maior">maior que</option>
        <option value="menor">menor que</option>
        <option value="igual">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
      />
      <button type="button" data-testid="button-filter">Filtrar</button>
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
          { filterPlanet.map((planet, index) => (
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
    </div>
  );
}

export default Table;

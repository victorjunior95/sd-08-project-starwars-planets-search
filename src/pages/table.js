import React, { useContext } from 'react';
import { savePlanet } from '../context/PlanetContext';

function formInput() {
  return (
    <div>
      <form>
        <input type="text" data-testid="name-filter" placeholder="Nome do Planeta" />
      </form>
      <button type="button">Filtrar</button>
    </div>
  );
}

function Table() {
  const { planets } = useContext(savePlanet);
  return (
    <div>
      { formInput() }
      <table>
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
          <th>residents</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
        </tr>
        {planets.map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.residents }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.url }</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;

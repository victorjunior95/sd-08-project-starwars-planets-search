import React, { useContext } from 'react';
import { savePlanet } from '../context/PlanetContext';
import FormPlanets from '../components/FormPlanets';

function Table() {
  const { filtersPlanets } = useContext(savePlanet);
  return (
    <div>
      <FormPlanets />
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">rotation_period</th>
            <th scope="col">orbital_period</th>
            <th scope="col">diameter</th>
            <th scope="col">climate</th>
            <th scope="col">gravity</th>
            <th scope="col">terrain</th>
            <th scope="col">surface_water</th>
            <th scope="col">population</th>
            <th scope="col">residents</th>
            <th scope="col">films</th>
            <th scope="col">created</th>
            <th scope="col">edited</th>
          </tr>
        </thead>
        <tbody>
          {filtersPlanets.map((planet) => (
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
        </tbody>
      </table>
    </div>
  );
}

export default Table;

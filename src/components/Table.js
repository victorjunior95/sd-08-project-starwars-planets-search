import React, { useContext } from 'react';
import Header from './Header';
import PlanetsContext from '../context/MyContext';
// import Filters from './Filters';

const Table = () => {
  const { planets } = useContext(PlanetsContext);
  console.log(planets);
  return (
    <div>
      <h1>StarWars DataTable Hooks</h1>
      <table>
        <Header />
        <tbody>
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
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

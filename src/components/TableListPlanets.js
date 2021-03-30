import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

// function renderSelect() {
//   return (
//     <>
//       <option value="population">population</option>
//       <option value="orbital_period">orbital_period</option>
//       <option value="diameter">diameter</option>
//       <option value="rotation_period">rotation_period</option>
//       <option value="surface_water">surface_water</option>
//     </>
//   );
// }

export default function TableListPlanets() {
  const { dataStarWars } = useContext(PlanetsContext);

  return (
    <div>

      <table>
        <thead>
          <tr>
            {dataStarWars.map(({ name }, index) => (
              <th
                key={ index }
                data-testid="column-sort"
              >
                {name}
              </th>))}
          </tr>
        </thead>
        <tbody>
          { dataStarWars.map((planet) => (
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
    </div>
  );
}

// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {name: "Alderaan", rotation_period: "24", orbital_period: "364", diameter: "12500", climate: "temperate", …}
// 1: {name: "Bespin", rotation_period: "12", orbital_period: "5110", diameter: "118000", climate: "temperate", …}
// 2: {name: "Coruscant", rotation_period: "24", orbital_period: "368", diameter: "12240", climate: "temperate", …}
// 3: {name: "Dagobah", rotation_period: "23", orbital_period: "341", diameter: "8900", climate: "murky", …}
// 4: {name: "Endor", rotation_period: "18", orbital_period: "402", diameter: "4900", climate: "temperate", …}
// 5: {name: "Hoth", rotation_period: "23", orbital_period: "549", diameter: "7200", climate: "frozen", …}
// 6: {name: "Kamino", rotation_period: "27", orbital_period: "463", diameter: "19720", climate: "temperate", …}
// 7: {name: "Naboo", rotation_period: "26", orbital_period: "312", diameter: "12120", climate: "temperate", …}
// 8: {name: "Tatooine", rotation_period: "23", orbital_period: "304", diameter: "10465", climate: "arid", …}
// 9: {name: "Yavin IV", rotation_period: "24", orbital_period: "4818", diameter: "10200", climate: "temperate, tropical", …}
// length: 10

import React, { useContext } from 'react';
import { planetsContext } from './PlanetsProvider';

const PlanetsTable = () => {
  const { filteredPlanets, setName } = useContext(planetsContext);

  const renderTableHeader = () => (
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
        <th>Created</th>
        <th>Edited</th>
        <th>URL</th>
      </tr>
    </thead>
  );
  const renderTableBody = () => (
    <tbody>
      {
        filteredPlanets.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>
              {
                planet.films.map((film) => `${film}, `)
              }
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))
      }
    </tbody>
  );

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  return (
    <>
      <input data-testid="name-filter" type="text" onChange={ handleChange } />
      <table>
        { renderTableHeader()}
        { renderTableBody() }
      </table>
    </>
  );
};

export default PlanetsTable;

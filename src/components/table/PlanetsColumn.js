import React, { useContext } from 'react';
import { PlanetsContext } from '../../context/PlantesContext';
import PlanetsLine from './PlanetsLine';

const PlanetsColumn = () => {
  const { planets } = useContext(PlanetsContext);

  return (
    <table>
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
          <th>Edited</th>
          <th>Films</th>
          <th>URL</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {planets.map(
          (planet) => <PlanetsLine key={ planet.name } planetInfos={ planet } />,
        )}
      </tbody>
    </table>
  );
};

export default PlanetsColumn;

import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsDataTable() {
  const { data } = useContext(StarWarsContext);
  // console.log(data);
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
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((planet, index) => (
            <tr key={ index }>
              {
                Object.entries(planet).map(([key, value]) => {
                  if (key === 'residents') return null;
                  return (
                    <td key={ key }>{ value }</td>
                  );
                })
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default PlanetsDataTable;

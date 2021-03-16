import React from 'react';

import './stylePlanets.css';

function PlanetTbody({ value }) {
  return (
    <tbody className="bodyTbody">
      {value.map((valueArray) => (
        <tr key={ valueArray.name }>
          <td>{valueArray.name}</td>
          <td>{valueArray.rotation_period}</td>
          <td>{valueArray.orbital_period}</td>
          <td>{valueArray.diameter}</td>
          <td>{valueArray.climate}</td>
          <td>{valueArray.gravity}</td>
          <td>{valueArray.terrain}</td>
          <td>{valueArray.surface_water}</td>
          <td>{valueArray.population}</td>
          <td>{valueArray.films}</td>
          <td>{valueArray.created}</td>
          <td>{valueArray.edited}</td>
          <td>{valueArray.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default PlanetTbody;

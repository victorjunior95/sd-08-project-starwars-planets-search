import React, { useContext } from 'react';
import starWarsContext from '../context/context';

function Table() {
  const planets = useContext(starWarsContext);

  let headers = [];
  if (planets.length > 0) {
    headers = Object.keys(planets[0]);
  }

  return (
    <table>
      <thead>
        <tr>
          { headers.map((header) => (
            <td key={ header }>{ header }</td>
          ))}
        </tr>
      </thead>
      <tbody>
        { planets.map((planet, i) => (
          <tr key={ i }>
            { Object.values(planet).map((value, index) => (
              <td key={ `${index}+${value}` }>
                { value }
              </td>
            )) }
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;

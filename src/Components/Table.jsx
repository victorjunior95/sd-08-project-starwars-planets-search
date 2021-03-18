import React, { useContext } from 'react';
import StarWarsContext from '../Contexts/StarWars/StarWarsContext';

const Table = () => {
  const { planets, filters: { filtersByName: { name } } } = useContext(StarWarsContext);
  const headers = planets[0] || [];
  return (
    <table>
      <thead>
        <tr>
          {
            Object.keys(headers)
              .map((header, index) => <th key={ index }>{header}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          planets.filter((planet) => (name ? (planet.name).includes(name) : true))
            .map((planet, index) => (
              <tr key={ index }>
                {
                  Object.values(planet)
                    .map((info) => <td key={ info }>{info}</td>)
                }
              </tr>
            ))
        }
      </tbody>
    </table>
  );
};

export default Table;

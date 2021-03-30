import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TableHeaders from './TableHeaders';

export default function Table() {
  const { filteredPlanets, isLoading } = useContext(StarWarsContext);
  console.log(filteredPlanets);
  return (
    isLoading
    && (
      <table border="solid 1px">
        <thead>
          <TableHeaders />
        </thead>
        <tbody>
          {
            filteredPlanets.map((planet, i) => (
              <tr key={ i }>
                { Object.values(planet)
                  .map((info) => <td key={ info }>{ info }</td>) }
              </tr>))
          }
        </tbody>
      </table>
    )
  );
}

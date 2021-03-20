import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { data, isLoading } = useContext(StarWarsContext);
  console.log(StarWarsContext);
  return (
    isLoading
    && (
      <table border="solid 1px">
        <thead>
          <tr>
            { Object.keys(data[0]).map((item, i) => <th key={ i }>{ item }</th>)}
          </tr>
        </thead>
        <tbody>
          {
            data.map((planet, i) => (
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

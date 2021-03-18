import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, isLoading } = useContext(PlanetContext);
  return (
    isLoading
      && (
        <table border="solid ">
          <thead>
            <tr>
              {Object.keys(data.find((titles) => titles))
                .map((info, index) => (info !== 'residents'
                  ? <th key={ index }>{info}</th> : null))}
              {/* {headers.map((e, index) => <th key={ index }>{e}</th>)} */}
            </tr>
          </thead>
          <tbody>
            {data.map((planet, i) => (
              <tr key={ i }>
                {Object.keys(planet)
                  .map((info, index) => (info !== 'residents'
                    ? <td key={ index }>{planet[info]}</td>
                    : null
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
  );
}

export default Table;

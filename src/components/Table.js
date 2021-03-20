import React, { useContext } from 'react';
import StarsAppContext from '../context/StarsAppContext';

function Table() {
  const { data } = useContext(StarsAppContext);

  return (
    data.length > 0
    && (
      <table border="solid 1px">
        <thead>
          <tr>
            { Object.keys(data[0])
              .map((i, index) => <th key={ index }>{i}</th>)}
          </tr>
        </thead>
        <tbody>
          {data
            .map((i, index) => (
              <tr key={ index }>
                {Object.values(i)
                  .map((valor) => <td key={ valor }>{valor}</td>)}
              </tr>
            ))}
        </tbody>
      </table>
    )

  );
}

export default Table;

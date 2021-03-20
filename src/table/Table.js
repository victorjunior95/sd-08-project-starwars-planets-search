import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, loading } = useContext(StarWarsContext);
  // console.log(data);
  return (
    loading
    && (
      <table border="solid 1px">
        <thead>
          <tr>
            {Object.keys(data[0]).map((i, index) => <th key={ index }>{i}</th>)}
          </tr>
        </thead>
        <tbody>
          {data
            .map((tableLine, index) => (
              <tr key={ index }>
                { Object.values(tableLine)
                  .map((item) => <td key={ item }>{item}</td>) }
              </tr>))}
        </tbody>
      </table>
    )
  );
}

export default Table;

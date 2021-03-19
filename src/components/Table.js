import React, { useContext, useEffect } from 'react';
import MyContext from '../MyContext';

function Table() {
  const { data, fetchPlanets } = useContext(MyContext);
  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);
  return (
    <div>
      <p>Olá</p>
      {/* {data[0] !== undefined ? console.log(data[0]) : <p>Carregando</p>} */}
      <table>
        <thead>
          <tr>
            {data[0] !== undefined ? Object.keys(data[0])
              .map((item) => item !== 'url' && <th key={ item }>{item}</th>)
              : <td>Carregando</td>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={ item.name }>
              <td>{item.name}</td>
              <td>{item.rotation_period}</td>
              <td>{item.orbital_period}</td>
              <td>{item.diameter}</td>
              <td>{item.climate}</td>
              <td>{item.gravity}</td>
              <td>{item.terrain}</td>
              <td>{item.surface_water}</td>
              <td>{item.population}</td>
              <td>Residents</td>
              <td>{item.films}</td>
              <td>{item.created}</td>
              <td>{item.edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

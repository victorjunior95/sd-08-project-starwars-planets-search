import React, { useContext } from 'react';
import ContextStars from '../context/ContextStar';

function Table() {
  const contexto = useContext(ContextStars);
  const { planets } = contexto;
  /* function teste(){ } ;
  const teste2 = teste.keys; */
  console.log(planets);
  return (
    <div>
      <table border="1px solid black">
        <tr>
          {Object.keys(planets[0] || []).filter(
            (i) => (i !== 'residents'),
          ).map((item, i) => (
            <th key={ i }>{item}</th>
          ))}
        </tr>
        {planets.map((item, i) => (
          <tr key={ i }>
            <td>{item.climate}</td>
            <td>{item.created}</td>
            <td>{item.diameter}</td>
            <td>{item.edited}</td>
            <td>{item.films.map((f) => (f))}</td>
            <td>{item.gravity}</td>
            <td>{item.name}</td>
            <td>{item.orbital_period}</td>
            <td>{item.population}</td>
            <td>{item.rotation_period}</td>
            <td>{item.surface_water}</td>
            <td>{item.terrain}</td>
            <td>{item.url}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Table;

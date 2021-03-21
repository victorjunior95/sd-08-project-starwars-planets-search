import React, { useContext, useState } from 'react';
import ContextStarWars from '../Context/ContextStarWars';
import TableHead from './TableHead';

function Table() {
  const { planets, planetsFilter, planetsFiltered } = useContext(ContextStarWars);
  // console.log(ContextStarWars);
  const [inputName, setInputName] = useState('');

  const handleInputName = (e) => {
    setInputName(e.target.value);
    planetsFilter(inputName);
  };

  return (
    <section>
      <form>
        <label htmlFor="Name">
          Name:
          <input
            data-testid="name-filter"
            type="text"
            value={ inputName }
            onChange={ handleInputName }
          />

        </label>
      </form>
      <table>
        <TableHead />
        <tbody>
          {planets.map((el) => (
            <tr key={ el.name }>
              <td>{el.name}</td>
              <td>{el.rotation_period}</td>
              <td>{el.orbital_period}</td>
              <td>{el.diameter}</td>
              <td>{el.climate}</td>
              <td>{el.gravity}</td>
              <td>{el.terrain}</td>
              <td>{el.surface_water}</td>
              <td>{el.population}</td>
              <td>{el.films}</td>
              <td>{el.created}</td>
              <td>{el.edited}</td>
              <td>{el.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

  );
}

export default Table;

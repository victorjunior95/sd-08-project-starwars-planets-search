import React, { useContext } from 'react';
import ContextStarWars from '../Context/ContextStarWars';
import TableHead from './TableHead';

function Table() {
  // console.log(ContextStarWars);
  const { filteredPlanets, handleInputName, inputName, columnSelect, filter, handleSelect } = useContext(ContextStarWars);
  const { filterByNumericValues } = filter;
  // console.log(columnSelect);
  // console.log(filter);
  // console.log(filterByNumericValues.column);

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

        <select
          data-testid="column-filter"
          name="column"
          value={ filterByNumericValues.column }
          onChange={ handleSelect }
        >
          {columnSelect.map((el, index) => (
            <option key={ index }>{el}</option>
          ))}
        </select>
      </form>
      <table>
        <TableHead />
        <tbody>
          {filteredPlanets.map((el) => (
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

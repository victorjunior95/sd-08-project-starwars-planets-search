import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function Table() {
  const { table } = useContext(TodoContext);

  function renderRow(item, index) {
    return (
      <tbody key={ index }>
        <tr>
          <td>{item.name}</td>
          <td>{item.climate}</td>
          <td>{item.created}</td>
          <td>{item.diameter}</td>
          <td>{item.edited}</td>
          <td>{item.gravity}</td>
          <td>{item.orbital_period}</td>
          <td>{item.population}</td>
          <td>{item.rotation_period}</td>
          <td>{item.surface_water}</td>
          <td>{item.terrain}</td>
          <td>{item.url}</td>
          <td>{item.films}</td>
        </tr>
      </tbody>);
  }

  function renderIndex() {
    return (
      <thead>
        <tr>
          <th><h3>Name</h3></th>
          <th><h3>Climate</h3></th>
          <th><h3>Created</h3></th>
          <th><h3>Diameter</h3></th>
          <th><h3>Edited</h3></th>
          <th><h3>Gravity</h3></th>
          <th><h3>Orbital_period</h3></th>
          <th><h3>Population</h3></th>
          <th><h3>Rotation_period</h3></th>
          <th><h3>Surface_water</h3></th>
          <th><h3>Terrain</h3></th>
          <th><h3>Url</h3></th>
          <th><h3>Films</h3></th>
        </tr>
      </thead>);
  }

  return (
    <div>
      <table>
        {renderIndex()}
        {table.map((item, index) => item !== 'residents' && renderRow(item, index))}
      </table>
    </div>
  );
}

export default Table;

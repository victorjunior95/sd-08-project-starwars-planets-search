import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

function Table() {
  const { table, setFilters, filters, filters: { filterByName: { name } }, filters: { filterByNumericValues: [{ column, comparison, value }] } } = useContext(TodoContext);
  const [bt, setBt] = useState(false);

  const hundleOnClick = () => {
    const result = table.filter((obj) => {
      if (bt === false) return obj.name.includes(name);
      if (comparison === 'maior que>') return Number(obj[column]) > Number(value);
      if (comparison === 'menor que') return Number(obj[column]) < Number(value);
      if (comparison === 'igual a') return Number(obj[column]) === Number(value);
    });

    return result.map((result) => (
      <tbody key={ result.name }>
        <tr>
          <td>{result.name}</td>
          <td>{result.climate}</td>
          <td>{result.created}</td>
          <td>{result.diameter}</td>
          <td>{result.edited}</td>
          <td>{result.gravity}</td>
          <td>{result.orbital_period}</td>
          <td>{result.population}</td>
          <td>{result.rotation_period}</td>
          <td>{result.surface_water}</td>
          <td>{result.terrain}</td>
          <td>{result.url}</td>
          <td>{result.films}</td>
        </tr>
      </tbody>));
  };

  const hundleButton = () => {
    setBt(true);
    hundleOnClick();
  };

  const renderTable = () => (
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
    </thead>
  );

  const getName = (event) => {
    setFilters(
      {
        ...filters,
        [event.target.name]: {
          name: event.target.value,
        },
      },
    );
  };

  return (
    <div>
      <button onClick={ hundleButton } type="button" data-testid="button-filter">Filtrar</button>
      Nome:
      <input data-testid="name-filter" name="filterByName" onChange={ getName } />
      <table>
        {renderTable()}
        {hundleOnClick()}
      </table>
    </div>
  );
}

export default Table;

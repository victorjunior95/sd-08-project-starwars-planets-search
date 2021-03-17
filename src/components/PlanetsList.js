import React, { useContext } from 'react';
import AppContext from '../context/Context';

function PlanetsList() {
  const { dataApi,
    filters: { filterByNumericValues },
    filters: { filterByName: { name },
    } } = useContext(AppContext);

  const { column, comparison, value } = filterByNumericValues[0];
  // console.log(column, comparison, parseFloat(value));

  // const dataApiFilteredByName = dataApi
  // .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
  // ('maior que') return planet[column] > value

  return (
    dataApi
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))
      .filter((planet) => {
        if (comparison === 'maior que') {
          return planet[column] > parseFloat(value);
        }
        if (comparison === 'igual a') {
          return planet[column] === value;
        }
        return planet[column] < parseFloat(value);
      })

      .map((data, index) => (
        <tr key={ index }>
          <td>{ data.name }</td>
          <td>{ data.rotation_period }</td>
          <td>{ data.orbital_period }</td>
          <td>{ data.diameter }</td>
          <td>{ data.climate }</td>
          <td>{ data.gravity }</td>
          <td>{ data.terrain }</td>
          <td>{ data.surface_water }</td>
          <td>{ data.population }</td>
          <td>{ data.films }</td>
          <td>{ data.created }</td>
          <td>{ data.edited }</td>
          <td>{ data.url }</td>
        </tr>
      ))
  );
}

export default PlanetsList;

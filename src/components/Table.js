import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  const [fill, setFill] = useState('');
  return (
    <>
      <input
        type="text"
        name="filter"
        value={ fill }
        onChange={ ({ target }) => setFill(target.value) }
        data-testid="name-filter"
      />
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Periodo de rotação </th>
            <th>Periodo Orbital</th>
            <th>Diametro</th>
            <th>Clima</th>
            <th>Grvidade</th>
            <th>Terreno</th>
            <th>Agua na Superficie</th>
            <th>População</th>
            <th>Filmes</th>
            <th>Creado no</th>
            <th>Editado no</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((planets) => {
            if (fill.length === 0) return planets;

            return planets.name.toLowerCase().includes(fill.toLowerCase());
          }).map((planet, index) => (
            <tr key={ index }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}

        </tbody>
      </table>
    </>
  );
}

export default Table;

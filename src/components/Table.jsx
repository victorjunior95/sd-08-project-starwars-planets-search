import React, { useContext } from 'react';
import { DateContext } from '../context/DataContext';

const Table = () => {
  const { filterName, searchName, filterPlanet } = useContext(DateContext);

  return (
    <>
      <h1> StormTrooper, consulte o planeta de sua próxima missão no campo abaixo </h1>
      <label htmlFor="searchInput">
        Faça sua busca:
        <input
          data-testid="name-filter"
          type="text"
          onChange={ filterName }
          value={ searchName }
        />
      </label>
      <table border="1">
        <caption>Lista de Planetas</caption>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Nome</th>
            <th>Tempo de rotação</th>
            <th>Tempo de rotação orbital</th>
            <th>Diâmetro</th>
            <th>Clima</th>
            <th>Força Gravitacional</th>
            <th>Tipo de Terreno</th>
            <th>Presença de Água</th>
            <th>População</th>
            <th>Aparição em Filmes</th>
            <th>Criado em</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filterPlanet.map((item, index) => (
            <tr key={ item.name }>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.rotation_period}</td>
              <td>{item.orbital_period}</td>
              <td>{item.diameter}</td>
              <td>{item.climate}</td>
              <td>{item.gravity}</td>
              <td>{item.terrain}</td>
              <td>{item.surface_water}</td>
              <td>{item.population}</td>
              <td>{item.films.map((filme) => (<li key={ filme }>{filme}</li>))}</td>
              <td>{item.created}</td>
              <td>{item.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

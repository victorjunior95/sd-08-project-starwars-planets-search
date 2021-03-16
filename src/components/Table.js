import React, { useContext } from 'react';
import Header from './Header';
import PlanetsContext from '../context/MyContext';

const Table = () => {
  const { planets, filterByName, handleChange, searchName } = useContext(PlanetsContext);
  return (
    <div>
      <h1>StarWars DataTable Hooks</h1>
      <div className="all-filter">
        <div className="filter">
          <span>Filter by name</span>
          <input
            type="text"
            placeholder="select a planet"
            name={ searchName }
            onChange={ filterByName }
          />
          <div data-testid="name-filter">
            <span>xxx</span>
            <button type="button">X</button>
          </div>
        </div>
        <div className="filter">
          <span>Filter by numbers</span>
          <select data-testid="column-sort" id="sort-selection" onChange={ handleChange }>
            <option value="name" key="">select</option>
            <option value="name" key="name">name</option>
            <option value="population" key="population">population</option>
            <option value="orbital_period" key="orbital_period">orbital_period</option>
            <option value="diameter" key="diameter">diameter</option>
            <option value="rotation_period" key="rotation_period">rotation_period</option>
            <option value="surface_water" key="surface_water">surface_water</option>
          </select>
          <select data-testid="comparison-filter" id="comparison">
            <option value="">select</option>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input
            data-testid="value-filter"
            type="number"
            id="value"
          />
        </div>
        <div className="filter" />
      </div>
      <table>
        <Header />
        <tbody>
          {planets.map((planet) => (
            <tr key={ planet.name }>
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
    </div>
  );
};

export default Table;

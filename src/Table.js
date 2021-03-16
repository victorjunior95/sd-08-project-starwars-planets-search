import React, { useContext } from 'react';
import StarWarsContext from './Context/createContext';
import './style.css';

function Table() {
  const Context = useContext(StarWarsContext);

  const { setText, dataFilter, text,
    setColumn, setCompa, setValue,
    column, comparison, value } = Context;
  // setar valores da coluna aqui ,depois enviar pelo botao de clique e setar no obj para depois

  function handleName({ target }) {
    setText({
      ...text,
      filters: {
        ...text.filters,
        filterByName: { name: target.value },
      },
    });
  }
  function handleValuesC() {
    setText({
      ...text,
      filters: {
        ...text.filters,
        filterByNumericValues: [
          ...text.filters.filterByNumericValues,
          {
            column,
            comparison,
            value,

          },
        ],
      },
    });
  }
  /*  function handleValuesCo({ target }) {
    setText({
      filters: {
        ...text.filters,
        filterByNumericValues: [
          {
            column: target.value,
          },
        ],
      },
    });
  } */

  console.log(text);
  return (
    <div>
      <label htmlFor="search label">
        Search:
        <input
          type="text"
          onChange={ (event) => handleName(event) }
          data-testid="name-filter"
        />
      </label>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setCompa(e.target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleValuesC }
      >
        Adicionar Filtro
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {dataFilter && dataFilter.map(
            ({ name,
              rotation_period: rotationPeriod, orbital_period: oribitalPeriod,
              diameter, climate, gravity,
              terrain, surface_water: surfaceWater,
              population, films, created, edited, url },
            index) => (
              <tr key={ index }>
                <td>{name}</td>
                <td>{rotationPeriod}</td>
                <td>{oribitalPeriod}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{surfaceWater}</td>
                <td>{population}</td>
                <td>{films}</td>
                <td>{created}</td>
                <td>{edited}</td>
                <td>{url}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

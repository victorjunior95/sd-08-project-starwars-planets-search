import React, { useContext } from 'react';
import { savePlanet } from '../context/PlanetContext';

export default function FormPlanets() {
  const {
    searchByName,
    setSearchByName,
    options,
    height,
    filterOption,
    handleClick,
  } = useContext(savePlanet);
  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ (e) => setSearchByName(e.target.value) }
          placeholder="Nome do Planeta"
          value={ searchByName }
        />
      </form>
      <select data-testid="column-filter" onChange={ filterOption }>
        {options.map((key) => (
          <option key={ key } value={ key }>{key}</option>
        ))}
      </select>
      <select data-testid="comparison-filter" onChange={ filterOption }>
        {height.map((key) => (
          <option key={ key } value={ key }>{key}</option>
        ))}
      </select>
      <input type="number" data-testid="value-filter" onChange={ filterOption } />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

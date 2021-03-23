import React, { useContext } from 'react';
import { savePlanet } from '../context/PlanetContext';

export default function FormPlanets() {
  const { searchByName, setSearchByName } = useContext(savePlanet);
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
      <button type="button">Filtrar</button>
    </div>
  );
}

import React, { useContext, useState } from 'react';
import { PlanetsContext } from '../context/planetsContext';
import PlanetTbody from './PlanetTbody';
import PlanetThead from './PlanetThead';

function Planets() {
  const valueContext = useContext(PlanetsContext);
  const [filterName, setFilterName] = useState(null);

  const handleChange = ((({ target }) => {
    const valueModified = valueContext.filter(({ name }) => name.includes(target.value));
    if (target.value === '') {
      return setFilterName(valueContext);
    }
    return setFilterName(valueModified);
  }));

  return (
    <div>
      {console.log(filterName)}
      <header>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Digite o nome para filtrar"
          onChange={ handleChange }
        />
        <button
          type="button"
          onClick={ null }
        >
          Filtrar
        </button>
      </header>
      <table>
        <PlanetThead />
        <PlanetTbody value={ filterName || valueContext } />
      </table>
    </div>
  );
}
export default Planets;

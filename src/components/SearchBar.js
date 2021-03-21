import React, { useContext } from 'react';
import PlanetsContext from '../context/planetsContext';

const SearchBar = () => {
  const { filterPlanetsByName } = useContext(PlanetsContext);
  // const { filteredPlanets, filterPlanets } = useContext(PlanetsContext);
  // const [name, setName] = useState('');

  const handleChange = ({ target: { value } }) => {
    filterPlanetsByName(value);
  };

  return (
    <section>
      <header>
        <h1>In a galaxy far far away...</h1>
        <form>
          <input
            data-testid="name-filter"
            type="text"
            placeholder="Digite o nome do planeta..."
            onChange={ handleChange }
          />
          {/* <button type="button" onClick={ () => filterPlanets(name) }>
            Buscar
          </button> */}
        </form>
      </header>
      {/* <section>
        {
          filteredPlanets.map((planet) => <Card { ...planet } key={ planet } />)
        }
      </section> */}
    </section>
  );
};

export default SearchBar;

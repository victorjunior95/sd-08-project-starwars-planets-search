import { useContext, useState } from 'react';
import { PlanetsContext } from '../context/planetsContext';

const Home = () => {
  const { filteredPlanets, filterPlanets } = useContext(PlanetsContext);
  const [name, setName] = useState('');

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };
  return (
    <main>
      <header>
        <h1>
          From a galaxy far far away...
        </h1>
        <form>
          <input
            type="text"
            placeholder="Digite o nome do planeta..."
            onChange={ handleChange }
          />
          <button type="button" onClick={ () => filterPlanets(name) }>Buscar</button>
        </form>
      </header>
      <section>
        <section>
          {
            // filteredPlanets.map((planet) => <Card { ...planet } key={ planet } />)
          }
        </section>
      </section>
    </main>
  );
};

export default Home;

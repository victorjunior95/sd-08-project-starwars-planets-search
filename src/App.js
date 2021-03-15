import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './Components/Table';
import MyContext from './Components/MyContext';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [starwarsData, setStarwarsData] = useState({});
  const [name, setName] = useState('');

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then((data) => {
          setStarwarsData(data);
          setLoading(false);
        });
    }
    fetchData();
  }, []);

  const handleChange = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  const formField = () => (
    <form>
      <label htmlFor="name-filter">
        <input
          type="text"
          name="name-filter"
          placeholder="Digite o filtro"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
    </form>
  );

  const contextValues = {
    starwarsData,
    filters: {
      filterByName: {
        name,
      },
    },
  };

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <MyContext.Provider value={ contextValues }>
          <div>
            <div>
              {isLoading ? (
                <h1>LOADING...</h1>
              ) : (
                <div>
                  {formField()}
                  <Table />
                </div>
              )}
            </div>
          </div>
        </MyContext.Provider>
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './Components/Table';
import Form from './Components/Form';
import MyContext from './Components/MyContext';
import FilterName from './Hooks/FilterName';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [starwarsData, setStarwarsData] = useState({});
  const [filter, setFilter] = FilterName();

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
    setFilter(value);
  };

  const formField = () => (
    <form>
      <label htmlFor="name">
        <input
          type="name"
          id="name"
          placeholder="Digite o filtro"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
    </form>
  );

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <MyContext.Provider value={ starwarsData }>
          <div>
            <div>
              {isLoading ? (
                <h1>LOADING...</h1>
              ) : (
                <div>
                  <Form />
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

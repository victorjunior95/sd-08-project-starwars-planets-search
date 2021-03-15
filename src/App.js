import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './Components/Table';
import MyContext from './Components/MyContext';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [starwarsData, setStarwarsData] = useState({});
  const [name, setName] = useState('');
  const [columnFilter, setColumnFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState(0);
  const [filterNumerics, setFilterNumerics] = useState([]);

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

  const handleSelectColumn = ({ target: { value } }) => {
    setColumnFilter(value);
  };

  const handleSelectComparison = ({ target: { value } }) => {
    setComparisonFilter(value);
  };

  const handleNumber = ({ target: { value } }) => {
    setValueFilter(value);
  };

  const handleClick = () => {
    setFilterNumerics([
      {
        column: columnFilter,
        comparison: comparisonFilter,
        value: valueFilter,
      },
    ]);
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

      <label htmlFor="columnfilter">
        <select
          name="columnfilter"
          data-testid="column-filter"
          onChange={ handleSelectColumn }
          value={ columnFilter }
        >
          <option>Selecione:</option>
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>

      <label htmlFor="comparisonfilter">
        <select
          name="comparisonfilter"
          data-testid="comparison-filter"
          onChange={ handleSelectComparison }
          value={ comparisonFilter }
        >
          <option>Selecione:</option>
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="quantity">
        <input
          name="quantity"
          type="number"
          data-testid="value-filter"
          onChange={ handleNumber }
        />
      </label>
      <button type="button" data-testid="button-filter" onClick={ handleClick }>
        Filtrar
      </button>
    </form>
  );

  const contextValues = {
    starwarsData,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: filterNumerics,
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

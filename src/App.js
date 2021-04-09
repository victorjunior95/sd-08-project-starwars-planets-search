import React, { useEffect, useState } from 'react';
import './App.css';
import myContext from './context/dataContext';
import InputField from './components/input';
import Table from './components/table';
import getPlanets from './services/starwarsAPI';
import ShortSearch from './components/shortSearch';

const filterOptions = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

const columnFilter = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function App() {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [columns, setColumns] = useState(columnFilter);
  const [filterByPlanetName, setFilterByPlanetName] = useState(filterOptions);

  const tramelas = {
    data,
    filterByPlanetName,
    setFilterByPlanetName,
    planets,
    columns,
    setColumns,
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getPlanets();
      const { results } = response;
      setData(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const { filters: { filterByName: { name },
      filterByNumericValues } } = filterByPlanetName;

    const planetsFiltreds = data
      .filter((cada) => cada.name.toLowerCase().includes(name.toLowerCase()));
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((planet) => {
        switch (planet.comparsion) {
        case 'maior que':
          setPlanets(planetsFiltreds
            .filter((cada) => Number(cada[planet.column]) > Number(planet.value)));
          break;
        case 'menor que':
          setPlanets(planetsFiltreds
            .filter((cada) => Number(cada[planet.column]) < Number(planet.value)));
          break;
        case 'igual a':
          setPlanets(planetsFiltreds
            .filter((cada) => Number(cada[planet.column]) === Number(planet.value)));
          break;
        default:
          setPlanets(planetsFiltreds);
          break;
        }
      });
    } else {
      setPlanets(planetsFiltreds);
    }
  }, [data, filterByPlanetName]);

  return (
    <myContext.Provider value={ tramelas }>
      <InputField />
      <ShortSearch />
      <Table />
    </myContext.Provider>
  );
}

export default App;

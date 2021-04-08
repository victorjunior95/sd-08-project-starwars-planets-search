import React, { useEffect, useState } from 'react';
import './App.css';
import myContext from './context/dataContext';
import InputField from './components/input';
import Table from './components/table';
import getPlanets from './services/starwarsAPI';

const filterOptions = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function App() {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filterByPlanetName, setFilterByPlanetName] = useState(filterOptions);

  const tramelas = {
    data,
    filterByPlanetName,
    setFilterByPlanetName,
    planets,
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
    const { filters: { filterByName: { name } } } = filterByPlanetName;

    const planetsFiltreds = data
      .filter((cada) => cada.name.toLowerCase().includes(name.toLowerCase()));

    setPlanets(planetsFiltreds);
  }, [data, filterByPlanetName]);

  return (
    <myContext.Provider value={ tramelas }>
      <InputField />
      <Table />
    </myContext.Provider>
  );
}

export default App;

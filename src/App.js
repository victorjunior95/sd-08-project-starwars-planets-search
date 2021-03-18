import React, { useState, useEffect } from 'react';
import './App.css';
import Context from './components/Context';
import Table from './components/Table';

function App() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPlanets(data.results);
        setisLoading(false);
      });
  }, []);
  return (
    <div>
      { isLoading ? 'Loading...'
        : (
          <Context.Provider value={ planets }>
            <Table />
          </Context.Provider>
        )}
    </div>

  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Context from './components/Context';
import Table from './components/Table';

function App() {
  const [planets, setPlanets] = useState({});
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((data) => {
        setPlanets(data.results);
        setIsLoad(false);
      });
  }, []);
  return (
    <div>
      {isLoad
        ? (<p>Carregando</p>)
        : (
          <Context.Provider value={ planets }>
            <Table />
          </Context.Provider>
        )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import ContextStar from './ContextStar';

const initialstate = {
  filterByName: { name: 'tat' },
  filterByNumericValues: [
    { column: '', comparison: '', value: '' },
    { column: '', comparison: '', value: '' },
  ],

};

function PlanetProvider({ children }) {
  const [planets, setplanets] = useState([]);
  const [filters, setfilters] = useState(initialstate);
  // const [contname, setcontname] = useState(0);

  useEffect(() => {
    const getList = async () => {
      await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((res) => res.json())
        .then(async ({ results }) => {
        // console.log(results);
          setplanets(results);
        });
    };
    getList();
  }, []);

  return (
    <ContextStar.Provider
      value={ {
        planets, setplanets, filters, setfilters,
      } }
    >
      { children }
    </ContextStar.Provider>
  );
}

export default PlanetProvider;

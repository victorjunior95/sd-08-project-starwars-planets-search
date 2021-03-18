import React, { useState, useEffect } from 'react';
import ContextStar from './ContextStar';

const initialState = {

  filterByName: { name: '' },
  filterByNumericValues: [
    { column: '', comparison: '', value: '' },
    { column: '', comparison: '', value: '' },
  ],
};

// console.log(liso);

function PlanetProvider({ children }) {
  const [planets, setplanets] = useState([]);
  const [filters, setfilters] = useState(initialState);

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
    <ContextStar.Provider value={ { planets, filters, setfilters } }>
      { children }
    </ContextStar.Provider>
  );
}

export default PlanetProvider;

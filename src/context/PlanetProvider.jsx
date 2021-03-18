import React, { useState } from 'react';
import ContextStar from './ContextStar';

const initialState = {
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [
      { column: '', comparison: '', value: '' },
      { column: '', comparison: '', value: '' },
    ],
  },
};

const liso = [];
const getList = async () => {
  await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((res) => res.json())
    .then(async ({ results }) => {
      console.log(results);
      liso.push(await results);
      return (results.map((planet) => (delete planet.residents)));
    });
};
getList();
console.log(liso);

function PlanetProvider({ children }) {
  const [state, setstate] = useState(initialState);
  return (
    <ContextStar.Provider value={ { liso, state, setstate } }>
      { children }
    </ContextStar.Provider>
  );
}

export default PlanetProvider;

import React from 'react';

let liso = [];
export const getList = async () => {
  await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((res) => res.json())
    .then(async ({ results }) => {
      console.log(results);
      liso.push(await results);
      return (results.map((planet) => (delete planet.residents)));
    });
};
getList();
const ContextStars = React.createContext(liso);
console.log(liso);
export default ContextStars;

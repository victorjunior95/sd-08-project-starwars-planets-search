/* import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function FilterPlanets() {
  const { planets, filters } = useContext(StarwarsContext);

  const filtrar = (condicoes) => {
    const arr = [];
    condicoes.forEach((cond) => {
      if (cond.tipo === 'texto') {
        arr.push((i) => i.name.includes(`${cond.valor}`));
      } else if (cond.condicao === 'maior que') {
        arr.push((i) => i[cond.param] > cond.valor);
      } else if (cond.condicao === 'menor que') {
        arr.push((i) => i[cond.param] < cond.valor);
      } else if (cond.condicao === 'igual a') {
        arr.push((i) => i[cond.param] === cond.valor);
      }
    });
    let lista = [...planets];
    while (arr.length > 0) {
      lista = lista.filter(arr.pop());
    }
    return lista;
  };
  return (

  );
}

export default FilterPlanets; */

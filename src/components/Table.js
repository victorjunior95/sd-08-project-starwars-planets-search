import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import theads from '../data/theads';
import '../styles/Table.css';

function Table() {
  const { planets, filterByName, filterByNumericValue } = useContext(StarWarsContext);
  // const { column, comparision, value } = filterByNumericValue;
  const newData = planets.filter(
    (elem) => elem.name.includes(filterByName),
  )
    .filter((elem) => {
      if (filterByNumericValue[0]) {
        const { column, comparision, value } = filterByNumericValue[0];
        if (comparision === 'menor que') return elem[column] < Number(value);
        if (comparision === 'maior que') return elem[column] > Number(value);
        return elem[column] === (value);
      } return elem;
    })
    .filter((elem) => {
      if (filterByNumericValue[1]) {
        const { column, comparision, value } = filterByNumericValue[1];
        if (comparision === 'menor que') return elem[column] < Number(value);
        if (comparision === 'maior que') return elem[column] > Number(value);
        return elem[column] === (value);
      } return elem;
    })
    .filter((elem) => {
      if (filterByNumericValue[2]) {
        const { column, comparision, value } = filterByNumericValue[1];
        if (comparision === 'menor que') return elem[column] < Number(value);
        if (comparision === 'maior que') return elem[column] > Number(value);
        return elem[column] === (value);
      } return elem;
    })
    .filter((elem) => {
      if (filterByNumericValue[3]) {
        const { column, comparision, value } = filterByNumericValue[1];
        if (comparision === 'menor que') return elem[column] < Number(value);
        if (comparision === 'maior que') return elem[column] > Number(value);
        return elem[column] === (value);
      } return elem;
    })
    .filter((elem) => {
      if (filterByNumericValue[4]) {
        const { column, comparision, value } = filterByNumericValue[1];
        if (comparision === 'menor que') return elem[column] < Number(value);
        if (comparision === 'maior que') return elem[column] > Number(value);
        return elem[column] === (value);
      } return elem;
    })
    .map((elem) => Object.entries(elem)
      .filter((f) => f[0] !== 'residents'));

  return (
    <table className="planets-table">
      <thead>
        <tr>
          {theads.map((e, index) => <th key={ index }>{e}</th>)}
        </tr>
      </thead>
      <tbody>
        {newData.map((elem, index) => (
          <tr key={ index }>
            {elem.map((e) => <td key={ e[0] }>{e[1]}</td>)}
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;

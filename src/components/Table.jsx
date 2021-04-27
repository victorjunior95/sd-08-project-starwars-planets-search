import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../data/StarWarsContext';

const RESIDENTS_INDEX = 9;

// const comparisons = (column, comparison, value) => {
//   comparison === 'maior que'
//     ?
// };

const filterDataByNumericValues = (data, filterByNumericValues) => {
  const {
    column, comparison, value,
  } = filterByNumericValues[filterByNumericValues.length - 1];

  if (comparison === 'menor que') {
    return data.filter((planet) => planet[column] < value);
  }
  if (comparison === 'maior que') {
    return data.filter((planet) => planet[column] > value);
  }
  if (comparison === 'igual a') {
    return data.filter((planet) => planet[column] === value);
  }
  return data;
};
export default function Table() {
  const { filters: { filterByName: { name },
    filterByNumericValues }, filteredData,
  } = useContext(StarWarsContext);

  const filterNumericValues = filterDataByNumericValues(
    filteredData, filterByNumericValues,
  );
  const queryFilter = filterNumericValues.filter((planet) => planet.name.includes(name));
  // console.log(queryFilter);
  return (
    <table>
      {queryFilter.length < 1
        ? (
          <>
            <thead>
              <tr>
                <th>Sem resultados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tente novamente com outro termo.</td>
              </tr>
            </tbody>
          </>
        ) : (
          <>
            <thead>
              <tr>
                {Object.keys(queryFilter[0]).map((key, i) => (
                  key !== 'residents' && <th key={ i }>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {queryFilter.map((planet, i) => (
                <tr key={ i }>
                  {Object.values(planet).map((values, j) => (
                    j !== RESIDENTS_INDEX && <td key={ j }>{values}</td>))}
                </tr>
              ))}
            </tbody>
          </>
        )}
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
}.isRequired;

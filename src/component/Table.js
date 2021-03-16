import React, { useContext } from 'react';
// import getStarwarsApi from '../service/Api';
// import PropTypes from 'prop-types';

import StarwarsContext from '../context/StarwarsContext';

function ListOfInputs() {
  const { starwarsData } = useContext(StarwarsContext);
  // conceito visto na w3school
  function headTableListOfInputs() {
    return (
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
    );
  }

  function bodyTableListOfInputs() {
    // const filterInput = currencies.filter((currency) => currency.code = expenses.currency);
    // return expenses.map((expense) => (
    // preencha uma tabela com os dados retornados, com exceção dos da coluna residents
    console.log(starwarsData);
    // console.log(isLoading);
    // return starwarsData.map((data, index) => (
    return (
      <tbody>
        { starwarsData.map((data, index) => (
          <tr key={ index }>
            <td>{ data.name }</td>
            <td>{ data.rotation_period }</td>
            <td>{ data.orbital_period }</td>
            <td>{ data.diameter }</td>
            <td>{ data.climate }</td>
            <td>{ data.gravity }</td>
            <td>{ data.terrain }</td>
            <td>{ data.surface_water }</td>
            <td>{ data.population }</td>
            <td>{ data.films }</td>
            <td>{ data.created }</td>
            <td>{ data.edited }</td>
            <td>{ data.url }</td>
            {/* <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => deleteExpense(expense.id) }
            >
              Excluir
            </button> */}
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <div>
      <table>
        { headTableListOfInputs() }
        { bodyTableListOfInputs() }
      </table>
    </div>
  );
}

export default ListOfInputs;

// ListOfInputs.propTypes = {
//   expenses: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       currency: PropTypes.string,
//       description: PropTypes.string,
//       tag: PropTypes.string,
//       method: PropTypes.string,
//       value: PropTypes.string,
//       exchangeRates: PropTypes.shape(PropTypes.object),
//     }),
//   ).isRequired,
//   deleteExpense: PropTypes.func.isRequired,
// };

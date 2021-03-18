import React, { useContext } from 'react';
// import PropTypes from 'prop-types';

import StarwarsContext from '../context/StarwarsContext';

function FormInput() {
  const { filterName, filterByName } = useContext(StarwarsContext);
  console.log(filterByName);

  // const { starwarsData, setStarwarsData } = useState('');
  // const { isLoading, setIsLoading } = useState(true);
  // const { filterName, setFilterName } = useState({
  //   filters: {
  //     filterByName: {
  //       name: '',
  //     },
  //   },
  // });

  function createColumnFilters() {
    const columnSelected = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    return columnSelected
      .map((name) => <option key={ name } value={ name }>{ name }</option>);
  }

  function createComparisonFilter() {
    const comparisonSelected = ['maior que', 'menor que', 'igual a'];
    return comparisonSelected
      .map((name) => <option key={ name } value={ name }>{ name }</option>);
  }

  function renderPlanetInput() {
    // const { value } = this.state;
    return (
      <input
        type="text"
        name="value-planet"
        data-testid="name-filter"
        value={ filterByName }
        onChange={ filterName }
        placeholder="Pesquise nome do planeta"
      />
    );
  }

  function renderColumnFilter() {
    return (
      <select
        id="currency-input"
        data-testid="column-filter"
        name="currency"
        // value={ currency }
        // onChange={ this.handleChange }
      >
        { createColumnFilters() }
      </select>
    );
  }

  function renderComparisonFilter() {
    return (
      <select
        id="currency-input"
        data-testid="comparison-filter"
        name="currency"
        // value={ currency }
        // onChange={ this.handleChange }
      >
        { createComparisonFilter() }
      </select>
    );
  }

  function renderValueInput() {
    // const { value } = this.state;
    return (
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        // value={ value }
        // onChange={ this.handleChange }
        placeholder="Digite um número"
      />
    );
  }

  // const { id, value, description, currency, method, tag, exchangeRates } = this.state;
  // const { savedInputData, fetchCurrencies } = this.props;
  return (
    <form>
      <label htmlFor="value-planet">
        { renderPlanetInput() }
      </label>
      <label htmlFor="currency-input">
        { renderColumnFilter() }
      </label>
      <label htmlFor="method-input">
        { renderComparisonFilter() }
      </label>
      <label htmlFor="value">
        { renderValueInput() }
      </label>
      <button
        type="button"
        data-testid="button-filter"
        // onClick={ () => {
        //   savedInputData(
        //     { id, value, description, currency, method, tag, exchangeRates },
        //     fetchCurrencies(),
        //   );
        //   this.setState((prevState) => (
        //     { id: prevState.id + 1, value: '', description: '' }));
        // } }
      >
        FILTRAR
      </button>
    </form>
  );
}

export default FormInput;

// FormInput.propTypes = {
//   savedInputData: PropTypes.func.isRequired,
//   fetchCurrencies: PropTypes.func.isRequired,
//   currencies: PropTypes.instanceOf(Object).isRequired,
// };

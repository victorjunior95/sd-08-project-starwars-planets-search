import React, { useContext, useEffect, useState } from 'react';
import SearchPlanetsContext from '../context/SearchPlanetsContext';

const allOptions = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function Search() {
  const {
    filterByName,
    filterByNumericValues } = useContext(SearchPlanetsContext);
  const [filters, setFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const [arrayOfFilters, setArrayOfFilters] = useState([]);
  const [arrayOfOptions, setArrayOfOptions] = useState([...allOptions]);

  const handleChange = ({ target: { value } }) => {
    filterByName(value);
  };

  const handleChangeFilter = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleButton = (event) => {
    event.preventDefault();
    setArrayOfFilters([...arrayOfFilters, filters]);
  };

  const handleButtonX = (indexClicked) => {
    setArrayOfFilters(arrayOfFilters.filter((_, index) => index !== indexClicked));
  };

  useEffect(() => {
    filterByNumericValues(arrayOfFilters);
    setArrayOfOptions(allOptions
      .filter((option) => !arrayOfFilters.some(({ column }) => option === column)));
    // eslint-disable-next-line
  }, [arrayOfFilters]);

  useEffect(() => {
    setFilters({
      column: arrayOfOptions[0],
      comparison: 'maior que',
      value: '0',
    });
  }, [arrayOfOptions]);

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Digite o nome do planeta"
        onChange={ handleChange }
      />
      <select
        name="column"
        data-testid="column-filter"
        onChange={ handleChangeFilter }
        value={ filters.column }
        required
      >
        {
          arrayOfOptions.map((option) => (
            <option value={ option } key={ option }>{option}</option>
          ))
        }
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleChangeFilter }
        value={ filters.comparison }
        required
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleChangeFilter }
        value={ filters.value }
        required
      />
      <button type="button" data-testid="button-filter" onClick={ handleButton }>
        Filtrar
      </button>

      <ol>
        {
          arrayOfFilters.map(({ column, comparison, value }, index) => (
            <li key={ column } data-testid="filter">
              {`${column}, ${comparison}, ${value}`}
              <button
                type="button"
                onClick={ () => handleButtonX(index) }
              >
                X
              </button>
            </li>
          ))
        }
      </ol>
    </section>
  );
}

export default Search;

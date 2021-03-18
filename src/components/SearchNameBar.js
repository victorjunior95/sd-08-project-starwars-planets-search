import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchNameBar() {
  const { setName, addFilterNumericValue } = useContext(StarWarsContext);
  const columnFilter = [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [number, setNumberFilter] = useState(0);

  const comparisonFilter = ['', 'Maior que', 'Menor que', 'Igual a'];

  return (
    <div>
      <label htmlFor="text" data-testid="text-input-label">
        Inclui o texto no nome:
        <input
          data-testid="text-input"
          type="text"
          name="searchName"
          onChange={ (e) => setName(e.target.value) }
        />
      </label>
      <label htmlFor="selectFilter">
        Selecione o filtro:
        <select
          name="selectFilter"
          data-testid="column-filter"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          {columnFilter.map((element) => (
            <option value={ element } key={ element }>
              { element }
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="selectComparison">
        Selecione a comparação
        <select
          name="selectComparison"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
        >
          {comparisonFilter.map((element) => (
            <option key={ element } value={ element }>
              { element }
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="numberFilter">
        Digite o número:
        <input
          data-testid="value-filter"
          type="number"
          name="numberFilter"
          value={ number }
          onChange={ (e) => setNumberFilter(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => addFilterNumericValue(column, comparison, number) }
      >
        Filtrar
      </button>
    </div>
  );
}

export default SearchNameBar;

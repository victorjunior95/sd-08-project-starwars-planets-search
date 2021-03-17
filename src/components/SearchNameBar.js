import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchNameBar() {
  const { setName } = useContext(StarWarsContext);
  const columnFilter = [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

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
          onChange={ (e) => console.log(e.target.value) }
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
          onChange={ (e) => console.log(e.target.value) }
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
          onChange={ (e) => console.log(e.target.value) }
        />
      </label>
    </div>
  );
}

export default SearchNameBar;

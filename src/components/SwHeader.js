import React, { useContext, useState } from 'react';
import { ContextFromStarWars } from '../contexts/ContextFromStarWars';

function SwHeader() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueNumber, setValueNumber] = useState(0);
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const {
    inputName,
    setInputName,
    setInstructionToFilter,
  } = useContext(ContextFromStarWars);

  const handleClick = () => {
    setInstructionToFilter(
      {
        column,
        comparison,
        value: valueNumber,
      },

    );

    const columnsFilter = columns.filter((columnFilter) => columnFilter !== column);
    setColumns(columnsFilter);
  };

  return (
    <div className="swHeaderContainer">
      <input
        type="text"
        data-testid="name-filter"
        placeholder="search name"
        value={ inputName }
        onChange={ ({ target }) => setInputName(target.value) }
      />
      <select
        value={ column }
        name="column"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        { columns.map((element) => (
          <option
            key={ element }
            value={ element }
          >
            {element}
          </option>)) }
      </select>

      <select
        value={ comparison }
        name="comparison"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        placeholder="amount"
        value={ valueNumber }
        onChange={ ({ target }) => setValueNumber(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filter
      </button>

    </div>
  );
}

export default SwHeader;

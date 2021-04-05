import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function NumericFilterForm() {
  const { setNumFilter, selectColumns, numFilter } = useContext(PlanetContext);
  const [arrColumns, setArrColumns] = useState();
  const [numericFilter, setNumericFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  function handleChange({ target }) {
    setNumericFilter({
      ...numericFilter,
      [target.name]: target.value,
    });
  }

  useEffect(() => {
    if (arrColumns === undefined) {
      setArrColumns(selectColumns);
    }
  }, [arrColumns, selectColumns]);

  const filterArrOptions = () => setArrColumns(arrColumns
    .filter((item) => item !== numericFilter.column));

  function handleClick() {
    setNumFilter([
      ...numFilter,
      numericFilter,
    ]);
    filterArrOptions();
  }

  return (
    <form>
      <select name="column" id="" data-testid="column-filter" onChange={ handleChange }>
        {
          arrColumns && arrColumns
            .map((item, i) => <option key={ i } value={ item }>{item}</option>)
        }
      </select>
      <select
        name="comparison"
        id=""
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        name="value"
        value={ numericFilter.value }
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </form>
  );
}

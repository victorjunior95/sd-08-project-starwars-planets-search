import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const SELECT_FILTER = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

export default function FilterSelect() {
  const { setFilters, filters } = useContext(PlanetsContext);
  const [selectFilters, setSelectFilters] = useState(SELECT_FILTER);
  const [localFilter, setLocalFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const handleChange = ({ target: { value, name } }) => {
    setLocalFilter({ ...localFilter, [name]: value });
  };

  const handleClick = () => {
    setFilters({ ...filters, ...{ filterByNumericValues: [localFilter] } });
    const { column, value } = localFilter;
    if (value) {
      const newSelectFilters = selectFilters.filter((element) => element !== column);
      setSelectFilters(newSelectFilters);
      console.log(newSelectFilters);
    }
  };

  return (
    <>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ (event) => handleChange(event) }
      >
        {selectFilters.map((element, index) => (
          <option key={ index } value={ element }>{element}</option>
        ))}
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ (event) => handleChange(event) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>

      </select>
      <input
        onChange={ (event) => handleChange(event) }
        data-testid="value-filter"
        type="number"
        name="value"
      />
      <button
        onClick={ () => handleClick() }
        data-testid="button-filter"
        type="button"
        value="Filtrar"
      >
        Filtrar
      </button>
    </>
  );
}

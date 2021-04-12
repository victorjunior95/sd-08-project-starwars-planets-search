import React, { useContext, useState } from 'react';
import { Context } from '../services/PlanetsContext';

function SortForm() {
  const { data, columnTags } = useContext(Context);

  const [numericSortedData, setNumericSortedData] = useState([]);
  const [order, setOrder] = useState({
    column: 'population',
    sort: '',
  });

  const POSITIVE = 1;
  const NEGATIVE = -1;

  function handleClickSortButton() {
    const sortTag = order.column;
    const sortType = order.sort;
    if (sortType === 'ASC') {
      setNumericSortedData(data.sort((a, b) => {
        if (Number(a[sortTag]) < Number(b[sortTag])) return NEGATIVE;
        if (Number(a[sortTag]) > Number(b[sortTag])) return POSITIVE;
        return 0;
      }));
      console.log(numericSortedData);
    }
    if (sortType === 'DESC') {
      setNumericSortedData(data.sort((a, b) => {
        if (Number(a[sortTag]) > Number(b[sortTag])) return NEGATIVE;
        if (Number(a[sortTag]) < Number(b[sortTag])) return POSITIVE;
        return 0;
      }));
      console.log(numericSortedData);
    }
  }

  return (
    <form>
      <select
        data-testid="column-sort"
        onChange={ (e) => setOrder({ ...order, column: e.target.value }) }
      >
        {columnTags.map((sortTag) => (
          <option key={ sortTag } value={ sortTag }>
            {sortTag}
          </option>
        ))}
      </select>
      <label htmlFor="ASC">
        <input
          type="radio"
          name="sort-input"
          data-testid="column-sort-input-asc"
          id="ASC"
          value="ASC"
          onClick={ (e) => setOrder({ sort: e.target.value }) }
        />
        ascendente
      </label>
      <label htmlFor="DESC">
        <input
          type="radio"
          name="sort-input"
          data-testid="column-sort-input-desc"
          id="DESC"
          value="DESC"
          onClick={ (e) => setOrder({ sort: e.target.value }) }
        />
        descendente
      </label>
      <button
        onClick={ handleClickSortButton }
        type="button"
        data-testid="column-sort-button"
      >
        Add sort filter
      </button>
    </form>
  );
}

export default SortForm;

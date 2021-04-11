import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function ExcludeFilter() {
  const { filterNumeric } = useContext(StarWarsContext);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    setData(filterNumeric);
  }, [filterNumeric]);

  const handleClick = ({ target: { name } }) => {
    console.log(name);
  };

  return (
    data.length > 0 && (
      <div>
        {data.map((item, index) => (
          <div data-testid="filter" key={ index }>
            {item.column }
            {item.comparison }
            {item.value}
            <button name={ item.column } type="button" onClick={ handleClick }>x</button>
          </div>
        ))}
      </div>
    )
  );
}

export default ExcludeFilter;

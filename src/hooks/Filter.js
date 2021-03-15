import { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../provider/StarWarsContext';

const FilterName = (data, value) => {
  if (!value) return data;
  const result = data.filter((el) => {
    if (el.name.includes(value)) return el;
    return '';
  });
  return result;
};

function Filter() {
  const {
    data,
    filters: { filterByName: { name } },
  } = useContext(StarWarsContext);

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets(data);
  }, [data]);

  useEffect(() => {
    setPlanets(FilterName(data, name));
  }, [data, name]);

  return [planets];
}

export default Filter;

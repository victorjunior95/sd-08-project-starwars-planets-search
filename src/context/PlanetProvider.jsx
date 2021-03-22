import React, { useState, useEffect } from 'react';
import ContextStar from './ContextStar';

/* const initialstate = {
  filterByName: { name: '' },
  filterByNumericValues: [
    { column: '', comparison: '', value: '' },
  ],{ column: '', comparison: '', value: '' }

}; */

function PlanetProvider({ children }) {
  const [planets, setplanets] = useState([]);
  const [name, setname] = useState('');
  const [bynumbers, setbynumbers] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: '100000',
    },
  );

  useEffect(() => {
    const getList = async () => {
      await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((res) => res.json())
        .then(async ({ results }) => {
        // console.log(results);
          setplanets(results);
        });
    };
    getList();
  }, []);

  const handleClick = () => {
    setplanets([]);
    const { column, comparison, value } = bynumbers;
    if (comparison === 'maior que') {
      return setplanets(planets
        .filter((i) => Number(i[column]) > Number(value)));
    }
    if (comparison === 'menor que') {
      return setplanets(planets
        .filter((i) => Number(i[column]) < Number(value)));
    }
    if (comparison === 'igual a') {
      return setplanets(planets
        .filter((i) => Number(i[column]) === Number(value)));
    }
  };
  return (
    <ContextStar.Provider
      value={ {
        planets,
        setplanets,
        bynumbers,
        setbynumbers,
        name,
        setname,
        handleClick,
      } }
    >
      { children }
    </ContextStar.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};
export default PlanetProvider;

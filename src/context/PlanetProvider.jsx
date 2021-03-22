import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextStar from './ContextStar';

/* const initialstate = {
  filterByName: { name: '' },
  filterByNumericValues: [
    { column: '', comparison: '', value: '' },
  ],{ column: '', comparison: '', value: '' }

}; */

function PlanetProvider({ children }) {
  const [planets, setplanets] = useState([]);
  const [filteredplanets, setfilteredplanets] = useState([]);
  const [name, setname] = useState('');
  const [bynumbers, setbynumbers] = useState(
    {
      column: '',
      comparison: '',
      value: '',
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

  useEffect(() => {
    let Planetslist = planets;
    Planetslist = planets.filter((planet) => planet.name.includes((name)));
    setfilteredplanets(Planetslist);
  }, [planets, name]);

  const onfilterByName = (e) => {
    setname(e.target.value);
  };

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
        onfilterByName,
        filteredplanets,
        setfilteredplanets,
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

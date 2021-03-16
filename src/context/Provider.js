import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewContext from './NewContext';

function Provider({ children }) {
  const [info, setInfo] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      console.log(data.results);
      setInfo(data.results);
    }
    fetchData();
  }, [info]);

  useEffect(() => {
    const { filterByName: { name } } = filter;
    const filters = info.filter((data) => data.name.includes(name));
    setPlanet(filters);
  }, [info, filter]);

  const context = {
    planet,
    setPlanet,
    filter,
    setFilter,
  };

  // const planetsInfo = {
  //   info,
  //   setInfo,
  // };

  return (
    <NewContext.Provider value={ context }>
      { children }
    </NewContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};

export default Provider;

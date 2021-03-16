import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

export default function StarwarsProvider({ children }) {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await endpoint.json();
      setTables(data.results);
    };
    fetchData();
  }, []);

  const context = { tables, setTables };

  return (
    <StarwarsContext.Provider value={ context }>
      { children }
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '.';

function Provider(props) {
  const [planets, setPlanets] = useState({ results: [{ }] });
  const { children } = props;

  async function fetchPlanets() {
    await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((data) => setPlanets(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <MyContext.Provider value={ planets }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

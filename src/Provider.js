import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const ProviderPlanet = ({ children }) => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planetas, setPlanetas] = useState([]);
  const [filtroPlaneta, setFiltroPlaneta] = useState([]);
  const [procurarNome, setProcurarNome] = useState('');
  //   filters: {
  //     filterByName: {
  //       name: '',
  //     },
  //   },
  // });

  useEffect(() => {
    async function fechtData() {
      const { results } = await fetch(url).then((res) => res.json());
      setPlanetas(results);
      setFiltroPlaneta(results);
    }
    fechtData();
  }, []);

  useEffect(() => {
    let filtroNome = [];
    filtroNome = planetas.filter((planeta) => planeta.name.includes((procurarNome)));
    setFiltroPlaneta(filtroNome);
  }, [planetas, procurarNome]);

  const data = {
    procurarNome,
    setProcurarNome,
    filtroPlaneta,
  };

  return (
    <Context.Provider value={ data }>
      { children }
    </Context.Provider>
  );
};

ProviderPlanet.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default ProviderPlanet;

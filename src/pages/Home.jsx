import React, { useContext } from 'react';
import StarWarsContext from '../context/Context';

function Home() {
  const { test } = useContext(StarWarsContext);
  return (
    <div>
      Hello world!
      {console.log(test)}
    </div>
  );
}

export default Home;

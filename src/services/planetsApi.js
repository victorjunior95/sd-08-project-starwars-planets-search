const ENDPOINT_PLANTET = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const planetResponse = await fetch(ENDPOINT_PLANTET);
  const planetResponseJson = await planetResponse.json();
  return planetResponseJson;
};

export default getPlanets;

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetsAPIRequest = async () => {
  const { results } = await fetch(URL).then((response) => response.json());
  return results;
};

export default planetsAPIRequest;

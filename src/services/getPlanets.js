const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanets() {
  const request = fetch(URL)
    .then((resolve) => resolve.json())
    .then((data) => data.results);
  return request;
}

export default fetchPlanets;

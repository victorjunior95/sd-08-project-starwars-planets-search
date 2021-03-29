export function fetchPlanets() {
  const planetsEndpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  return fetch(planetsEndpoint)
    .then((r) => r.json())
    .then((resolve) => resolve);
}
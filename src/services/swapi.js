export const SWAPI_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getSwapiPlanets = () => (
  fetch(SWAPI_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

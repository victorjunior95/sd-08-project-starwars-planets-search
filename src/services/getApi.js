const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsApi = () => fetch(URL_API)
  .then((response) => response.json())
  .then((data) => data.results);

export default getPlanetsApi;

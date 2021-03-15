const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
const fetchAPI = fetch(API_URL)
  .then((response) => response.json())
  .then((jsoned) => (response.ok
    ? Promise.resolve(jsoned.results) : Promise.reject(jsoned)));

export default fetchAPI;

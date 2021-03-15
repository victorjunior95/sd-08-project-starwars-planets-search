const STARWARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
async function fetchStarWars() {
  const response = await fetch(STARWARS_API);
  const planets = response.await.response.json();
  return planets;
}
export default fetchStarWars;

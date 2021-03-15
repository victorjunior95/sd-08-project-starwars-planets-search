const STARWARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
async function FetchStarWars() {
  const response = await fetch(STARWARS_API);
  const planets = await response.json();
  console.table(planets.results);
  return planets.results;
}
export default FetchStarWars();

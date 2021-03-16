export default async function () {
  const url = 'https://swapi.dev/api/planets/';
  const planets = fetch(url)
    .then((response) => response.json())
    .then((data) => data.results);
  console.log(planets);
  return planets;
}

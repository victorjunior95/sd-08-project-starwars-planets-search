async function getPlanetsFromApi() {
  const allPlanets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((planetList) => planetList.json())
    .catch((error) => { throw new Error(error); });
  return allPlanets;
}

export default getPlanetsFromApi;

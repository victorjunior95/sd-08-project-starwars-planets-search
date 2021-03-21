// const fetch = require('node-fetch');

const AND_POINT_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
const getListPlanetsStarWars = () => (
  fetch(AND_POINT_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getListPlanetsStarWars;

// async function showConsole() {
//   const exit = await getListPlanetsStarWars();
//   console.log(exit);
// }

// showConsole();

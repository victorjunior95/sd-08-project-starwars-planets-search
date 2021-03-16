const STARWARS_BASE_API = 'https://swapi-trybe.herokuapp.com/api';

// const getStarwarsApi = () => (
//   fetch(`${STARWARS_BASE_API}/planets/`)
//     .then((response) => (response.json()
//       .then((json) => console.log(json.results)
//       || (response.ok ? Promise.resolve(json) : Promise.reject(json)))))
// );

// export default getStarwarsApi;

const getStarwarsPlanet = async () => {
  const responseApi = await fetch(`${STARWARS_BASE_API}/planets/`)
    .then((response) => response.json());

  // console.log(responseApi.results);
  return responseApi;
};

export default getStarwarsPlanet;

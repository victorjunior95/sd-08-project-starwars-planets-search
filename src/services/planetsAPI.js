const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetsAPI = async () => {
  const planets = await fetch(URL)
    .then((reponse) => reponse.json());
  return planets.results;
};

// console.log(planetsAPI());

export default planetsAPI;

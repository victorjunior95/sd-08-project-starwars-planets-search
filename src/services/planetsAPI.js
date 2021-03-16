const URL = 'https://swapi.dev/api/planets/';

const planetsAPI = async () => {
  const planets = await fetch(URL)
    .then((reponse) => reponse.json());
  return planets;
};

export default planetsAPI;

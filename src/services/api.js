const api = {
  get: async (route) => {
    const result = await fetch(`htps://swapi-trybe.herokuapp.com/api${route}`);
    const json = await result.json();

    return json;
  },
};

export default api;

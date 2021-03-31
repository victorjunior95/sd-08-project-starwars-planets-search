const getPlanetsStarWars = () => (
  fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getPlanetsStarWars;

// 1 - Faça uma requisição para o endpoint /planets da API de Star Wars e preencha uma tabela com os dados retornados, com exceção dos da coluna residents

//   A tabela deve ser renderizada por um componente chamado <Table />. Os dados recebidos da API devem ser salvos num campo chamado data do contexto e é daí que a tabela deve lê-los. A requisição deve ser feita num componente separado do componente da tabela.

//  A API a ser consultada está nesse link. Ou seja, você deverá fazer um fetch para a URL https://swapi-trybe.herokuapp.com/api/planets/

//  A tabela deve ter uma primeira linha com os headers e as demais com as informações de cada campo.

// O que será verificado:

// - Realiza uma requisição para a API
// - Preenche a tabela com os dados retornados
// - Verifica se a tabela tem 13 colunas
// - Verifica se a tabela tem uma linha para cada planeta retornado

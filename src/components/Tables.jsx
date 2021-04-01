import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TableCard from '../components/TableCard';

function Tables() {
  const { data, isFetching } = useContext(StarWarsContext);
  const tableHeaders = [
    'Nome',
    'Tempo de Rotação',
    'Período Orbital ',
    'Diâmetro',
    'Clima',
    'Gravidade',
    'Território',
    'Água',
    'População',
    'Filmes',
    'Criação',
    'Data de Edição',
    'URL',
  ];

  return !isFetching ? (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((headElement, index) => (
            <th key={index}>{headElement}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((result, index) => (
          <TableCard key={index} result={result} />
        ))}
      </tbody>
    </table>
  ) : (
    <span>Carregando...</span>
  );
}

export default Tables;

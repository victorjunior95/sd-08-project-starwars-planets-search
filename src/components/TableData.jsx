import React, { useContext } from 'react';
import Context from '../context/Context';

export default function TableData() {
  const { data } = useContext(Context);

  function renderTableHeader() {
    const columns = Object.keys(data[0]);
    return columns.map((item) => <th key={ item }>{item}</th>);
  }

  function renderTableContent() {
    const columns = Object.keys(data[0]);
    return data.map((row, indexCell) => (
      <tr key={ indexCell }>
        {columns.map((item, index) => (
          <td key={ `cell${index}` }>{row[item]}</td>
        ))}
      </tr>
    ));
  }
  function isLoading() {
    return <p>Carregando...</p>;
  }

  return (
    <table>
      <thead>
        <tr>{data[0] ? renderTableHeader() : isLoading()}</tr>
      </thead>
      <tbody>{data[0] ? renderTableContent() : isLoading()}</tbody>
    </table>
  );
}

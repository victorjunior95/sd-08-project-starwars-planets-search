import React, { useContext } from 'react';
import Context from '../context/Context';

export default function TableData() {
  const { data, filters } = useContext(Context);

  function renderTableHeader() {
    const columns = Object.keys(data[0]);
    return columns.map((item) => (
      <th key={ item } title={ item }>
        {item}
      </th>
    ));
  }

  function renderTableContent() {
    const columns = Object.keys(data[0]);
    const tableContent = filters.filterByName.name !== undefined
      ? data.filter((item) => item.name.includes(filters.filterByName.name))
      : data;
    return tableContent.map((row, indexRow) => (
      <tr key={ indexRow }>
        {columns.map((item, indexCell) => {
          if (indexCell === 0) {
            return (
              <td
                key={ row[item] }
                data-testid="planet-name"
                style={ {
                  border: '1px solid black',
                  textAlign: 'center',
                  fontStyle: 'italic',
                  padding: '10px',
                } }
              >
                {row[item]}
              </td>
            );
          }
          return (
            <td
              key={ row[item] }
              style={ {
                border: '1px solid black',
                textAlign: 'center',
                fontStyle: 'italic',
                padding: '10px',
              } }
            >
              {row[item]}
            </td>
          );
        })}
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
      <tbody>{data[0] ? renderTableContent() : null}</tbody>
    </table>
  );
}

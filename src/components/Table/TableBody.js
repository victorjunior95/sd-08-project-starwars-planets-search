import React from 'react';

function TableBody({ contentRow }) {
  const renderTd = (rows) => {
    const result = Object.entries(rows).map(([key, value], index) => {
      if (key === 'films' || key === 'url') {
        return (
          <td key={ index }>
            <a target="_blank" rel="noreferrer" href=" value ">Link</a>
          </td>
        );
      }
      return (
        <td key={ index }>{ value }</td>
      );
    });
    return result;
  };

  return (
    <tbody>
      { contentRow.map((el, index) => (
        <tr key={ index }>
          { renderTd(el) }
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;

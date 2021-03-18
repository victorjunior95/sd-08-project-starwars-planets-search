import React, { useContext } from 'react';
import createContext from '../contextApi/createContext';

function TableHeader() {
  const { data } = useContext(createContext);

  data.forEach((element) => delete element.residents);
  const keys = Object.keys(data[0]);
  const estilo = { border: '1px solid black' };

  return (
    data.map((element, index) => (
      <tr key={ index }>
        { keys.map((infor) => (
          <td key={ index } style={ estilo }>
            { element[infor] }
          </td>
        ))}
      </tr>
    ))
  );
}

export default TableHeader;

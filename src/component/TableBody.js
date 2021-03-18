import React, { useContext } from 'react';
import createContext from '../contextApi/createContext';
import Loading from './Loading';

function TableHeader() {
  const { filterData } = useContext(createContext);

  if (filterData.length === 0) {
    return (
      <tr>
        <td>
          Nenhum planeta correspondente
        </td>
      </tr>
    )
  };

  filterData.forEach((element) => delete element.residents);
  const keys = Object.keys(filterData[0]);
  const estilo = { border: '1px solid black' };

  return (
    filterData.map((element, index) => (
      <tr key={ `${index}-header` }>
        { keys.map((infor) => (
          <td style={ estilo }>
            { element[infor] }
          </td>
        ))}
      </tr>
    ))
  );
}

export default TableHeader;

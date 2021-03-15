import React, { useContext } from 'react';
import AppContext from '../utils/AppContext';

const Table = () => {
  const { data } = useContext(AppContext);
  const list = data && data.length && data;
  list.map((object) => delete object.residents);
  console.log(list);
  const headList = Object.keys(list[0]);
  return (
    <table>
      <thead>
        <tr>
          { headList.map((title) => <th key={ title }>{ title }</th>)}
        </tr>
      </thead>
      <tbody>
        { list.map((row) => (
          <tr key={ row.name }>
            { Object.values(row).map((value) => <td key={ value }>{ value }</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

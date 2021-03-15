import React, { useContext } from 'react';
import AppContext from '../utils/AppContext';

const Table = () => {
  const { data } = useContext(AppContext);
  // console.log(data[0]);
  data.map((object) => delete object.residents);
  const headList = Object.keys(data[0]);
  return (
    <table>
      <thead>
        <tr>
          { headList.map((title) => <th key={ title }>{ title }</th>)}
        </tr>
      </thead>
      <tbody>
        { data.map((row) => (
          <tr key={ row.name }>
            { Object.values(row).map((value) => <td key={ value }>{ value }</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

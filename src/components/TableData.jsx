import PropTypes from 'prop-types';
import React from 'react';
import { useTable } from 'react-table';

export default function TableData({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table { ...getTableProps() }>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr key={ index } { ...headerGroup.getHeaderGroupProps() }>
            {headerGroup.headers.map((column) => (
              <th key={ `th${index}` } { ...column.getHeaderProps() }>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody { ...getTableBodyProps() }>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr key={ index } { ...row.getRowProps() }>
              {row.cells.map((cell) => (
                <td key={ `td${index}` } { ...cell.getCellProps() }>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TableData.propTypes = {
  columns: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

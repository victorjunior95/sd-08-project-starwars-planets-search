import React from 'react';

function TableHeader({ nameColumn }) {
  return (
    <thead>
      <tr>
        { nameColumn.map((el, index) => (
          <th key={ index }>{ el }</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;

import React from 'react';

function TableHeader() {
  const headerTexts = [
    'Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population',
    'Films', 'Created', 'Edited', 'URL',
  ];

  return (
    <thead>
      <tr>
        {headerTexts.map((text) => <th key={ text }>{text}</th>)}
      </tr>
    </thead>
  );
}

export default TableHeader;

import React from 'react';
import myContext from '../context/dataContext';

function tableHeaders() {
  return (
    <myContext.Consumer>
      {(data) => (
        (data[0])
          ? <thead>
            {' '}
            <tr>
              {Object.keys(data[0]).filter((head) => head !== 'residents')
                .map((cada) => <th key={ cada }>{cada}</th>) }
            </tr>
            </thead>
          : <h1>Espera</h1>) }
    </myContext.Consumer>
  );
}

export default tableHeaders;

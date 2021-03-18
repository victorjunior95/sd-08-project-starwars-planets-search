import React from 'react';
import './App.css';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <div>
        <input type="text" data-testid="name-filter" />
        <input type="text" data-testid="value-filter" />

        <select name="column" data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
        </select>

        <select name="comparison" data-testid="comparison-filter">
          <option value=">">maior que</option>
          <option value="<">menor que</option>
          <option value="===">igual a</option>
        </select>

        <input type="number" data-testid="value-filter" />

        <button type="button" data-testid="button-filter">Filtrar</button>

        <table>
          <tr>
            <th>coluna1</th>
            <th>coluna2</th>
          </tr>
          <tr>
            <td>informação</td>
            <td>0000</td>
          </tr>
          <tr>
            <td>planeta</td>
            <td>xablau</td>
          </tr>
        </table>

      </div>
    </PlanetProvider>

  );
}

export default App;

import React from 'react';
import SWContext from '../Context/SWContext';

class Table extends React.Component {
  componentDidMount() {
    const { setPlanets } = this.context;
    setPlanets();
  }

  render() {
    const { planets } = this.context;
    const headerTable = [
      'Nome',
      'Período de Rotação',
      'Período de Órbita',
      'Diâmetro',
      'Clima',
      'Gravidade',
      'Terreno',
      'Água',
      'População',
      'Filmes',
      'Criado em',
      'Editado em',
      'Link',
    ];
    return (
      <table>
        <tr>
          { headerTable.map((tablehead) => <th key={ tablehead }>{ tablehead }</th>) }
        </tr>
        { planets.map((planet, index) => (
          <tr key={ index }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td><a href={ planet.url }>{`Planeta ${planet.name}`}</a></td>
          </tr>
        )) }
      </table>
    );
  }
}

Table.contextType = SWContext;

export default Table;

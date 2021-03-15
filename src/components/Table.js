import React, { useContext, useState, useEffect } from 'react';
import StarContext from '../context/context';
// import objetosEmComum from './HyperFilter';

export default function Table() {
  const valorInicialDeComparação = 0;
  const [input, inputChange] = useState('');
  const [numberInput, numberInputChange] = useState(valorInicialDeComparação);
  const [columnSelect, columnSelectChange] = useState('rotation_period');
  const [comparisonSelect, comparisonSelectChange] = useState('maior que');
  const arrayTd = useContext(StarContext);
  const arrTh = ['Name', 'Terrain', 'Climate', 'Population',
    'Diameter', 'Rotation_period', 'Orbital_period', 'Gravity',
    'Surface_water', 'Created', 'Edited', 'Films', 'Url'];
  const [arrayOfNumericFilter, setArrayOfNumericFilter] = useState([]);
  const filterName = (array) => {
    const arrTdFiltered = array.filter((obj) => obj.name.includes((input)));
    return arrTdFiltered;
  };

  const filterNumber = () => {
    let arrTdFiltered = [];
    if (comparisonSelect === 'maior que') {
      arrTdFiltered = arrayTd.filter((obj) => obj[columnSelect] * 1 > numberInput);
      return arrTdFiltered;
    }
    if (comparisonSelect === 'menor que') {
      arrTdFiltered = arrayTd.filter((obj) => obj[columnSelect] * 1 < numberInput);
      return arrTdFiltered;
    } if (comparisonSelect === 'igual a') {
      arrTdFiltered = arrayTd.filter((obj) => obj[columnSelect] === numberInput);
      return arrTdFiltered;
    }
    return arrayTd;
  };

  useEffect(() => {
    setArrayOfNumericFilter([[...arrayTd]]);
  }, [arrayTd]);

  const geraFiltrosNumericos = () => {
    const arr = [...arrayOfNumericFilter];
    arr.push(filterNumber());
    setArrayOfNumericFilter(arr);
  };

  return (
    <div className="back">
      {' '}
      <div className="nameInputContainer">
        Filtro de Nome:
        <input
          className="nameInput"
          type="text"
          value={ input }
          placeholder="Busque por uma parte do nome do planeta."
          data-testid="name-filter"
          onChange={ (event) => { inputChange(event.target.value); } }
        />
      </div>
      <div className="numberInputContainer">
        Filtro Numérico:
        <select
          data-testid="column-filter"
          value={ columnSelect }
          onChange={ (event) => { columnSelectChange(event.target.value); } }
        >
          <option value="population">population</option>
          <option value="diameter">diameter</option>
          <option value="orbital_period">orbital_period</option>
          <option value="surface_water">surface_water</option>
          <option value="rotation_period">rotation_period</option>
        </select>
        <select
          data-testid="comparison-filter"
          value={ comparisonSelect }
          onChange={ (event) => { comparisonSelectChange(event.target.value); } }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          value={ numberInput }
          data-testid="value-filter"
          onChange={ (event) => { numberInputChange(event.target.value); } }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => geraFiltrosNumericos() }
        >
          Adicionar Filtro
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            { arrTh.map((item) => <th className="table" key={ item }>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {filterName(filterNumber()).map((obj) => (
            <tr className="table" key={ obj.name }>
              <td className="table">{obj.name}</td>
              <td className="table">{obj.terrain}</td>
              <td className="table">{obj.climate}</td>
              <td className="table">{obj.population}</td>
              <td className="table">{obj.diameter}</td>
              <td className="table">{obj.rotation_period}</td>
              <td className="table">{obj.orbital_period}</td>
              <td className="table">{obj.gravity}</td>
              <td className="table">{obj.surface_water}</td>
              <td className="table">{obj.created}</td>
              <td className="table">{obj.edited}</td>
              <td className="table">
                {obj.films
                  .map((item) => <p key={ item }>{ item }</p>)}
              </td>
              <td className="table">{obj.url}</td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}

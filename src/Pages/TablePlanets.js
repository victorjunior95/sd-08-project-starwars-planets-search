import React, { useContext } from 'react';
import AppContext from '../context/Context';
import PlanetsList from '../components/PlanetsList';

function TablePlanets() {
  // const [searchName, setSearch] = useState('');
  const { loading, setName } = useContext(AppContext);
  return (
    <div>
      <h1 className="text-center">Lista de Planetas</h1>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span
            className="input-group-text"
            id="inputGroup-sizing-default"
          >
            Google de Planetas
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={ (e) => setName(e.target.value) }
          data-testid="name-filter"
        />
      </div>
      {loading ? <h2>Loading...</h2> : (
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <PlanetsList />
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TablePlanets;

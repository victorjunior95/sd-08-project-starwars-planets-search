import React, { useContext } from 'react';
import SWContext from '../../context/SWContext';

const Filters = () => {
  const context = useContext(SWContext);
  const { setFilters } = context;
  // Possível ideia pro req 4: transformar os filtros dropdown em estados globais maybe???w
  const columnFilters = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const comparisonFilters = [
    'maior que', 'menor que', 'igual a',
  ];

  const setNameFilter = ({ target: { value } }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByName: { name: value },
    }));
  };

  // const nameFilter = ({ target: { value } }) => {
  //   console.log(dataToFilter);
  //   setData((prevData) => {
  //     if (value === '') {
  //       return data;
  //     }
  //     return {
  //       ...prevData,
  //       results: data.results
  //         .filter((planet) => planet
  //           .name
  //           .toLowerCase().includes(value.toLowerCase())),
  //     };
  //   });
  // };

  return (
    <>
      <label htmlFor="name-filter">
        Nome
        <input
          type="text"
          name="name-filter"
          data-testid="name-filter"
          onChange={ setNameFilter }
        />
      </label>

      <select
        data-testid="column-filter"
      >
        {columnFilters.map((filter) => <option key={ filter }>{filter}</option>)}
      </select>

      <select
        data-testid="comparison-filter"
      >
        {comparisonFilters.map((filter) => <option key={ filter }>{filter}</option>)}
      </select>

      <label htmlFor="value-filter">
        Digite
        <input
          type="text"
          name="value-filter"
          data-testid="value-filter"
        />
      </label>

      <button type="button" data-testid="button-filter">Aplicar</button>
    </>
  );
};

export default Filters;

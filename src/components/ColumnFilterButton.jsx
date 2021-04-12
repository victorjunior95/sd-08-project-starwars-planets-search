import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PlanetContext } from '../context/PlanetProvider';

export default function ColumnFilterButton(props) {
  const { filterArray, setFilterArray } = useContext(PlanetContext);
  const { columnValue } = props;

  const handleClick = (e) => {
    const { value } = e.target;
    console.log(value);
    setFilterArray(filterArray.filter(({ column }) => column !== value));
  };
  return (
    <button
      data-testid="filter"
      id="filter"
      onClick={ (e) => handleClick(e) }
      type="button"
      value={ columnValue }
    >
      X
    </button>
  );
}

ColumnFilterButton.propTypes = {
  columnValue: PropTypes.string.isRequired,
};

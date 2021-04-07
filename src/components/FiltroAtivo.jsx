import React, { useContext } from 'react';
import ContextStars from '../context/ContextStar';

function FiltroAtivo() {
  const contextos = useContext(ContextStars);
  const { filtroAtivo,
    setfiltroAtivo, restoreplanets,
    setfilteredplanets } = contextos;
  const { column } = filtroAtivo;

  return (
    /* () => {
      if (column !== undefined) {
        return ( */
    <div data-testid="REMOVE_FILTER_SELECTOR">
      {`${column}`}
      <button
        type="button"
        onClick={ () => {
          setfilteredplanets(restoreplanets);
          setfiltroAtivo([]);
        } }
      >
        X
      </button>

    </div>
  // );
  // }
    /// }

  );
}

export default FiltroAtivo;

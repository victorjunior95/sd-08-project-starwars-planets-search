import React, { useContext } from 'react';
import ContextStars from '../context/ContextStar';

function FiltroAtivo() {
  const contexto = useContext(ContextStars);
  const { filtroAtivo,
    setfiltroAtivo, restoreplanets, setplanets,
    setfilteredplanets } = contexto;
  const { column } = filtroAtivo;

  return (
    <div data-testid="filter">
      {`${column}`}
      <button
        type="button"
        onClick={ () => {
          setfilteredplanets(restoreplanets);
          setfiltroAtivo([]);
          setplanets(restoreplanets);
        } }
      >
        X
      </button>

    </div>
  );
}

export default FiltroAtivo;

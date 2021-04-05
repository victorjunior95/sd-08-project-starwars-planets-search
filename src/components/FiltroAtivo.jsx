import React, { useContext } from 'react';
import ContextStars from '../context/ContextStar';

function FiltroAtivo() {
  const contexto = useContext(ContextStars);
  const { filtroAtivo,
    setfiltroAtivo, restoreplanets,
    setfilteredplanets } = contexto;
  const { column } = filtroAtivo;

  return (
    () => {
      if (column !== undefined) {
        return (
          <div data-testid="filter">
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
        );
      }
    }

  );
}

export default FiltroAtivo;

import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header>
      <label htmlFor="">
        <input type="text" />
      </label>

      <label htmlFor="">
        <select name="" id="">
          <option value="">Population</option>
          <option value="">Orbital Period</option>
          <option value="">Rotation Period</option>
        </select>
      </label>

      <label htmlFor="">
        <select name="" id="">
          <option value="">Maior que</option>
          <option value="">Menor que</option>
          <option value="">Igual a</option>
        </select>
      </label>

      <button type="button">Filtrar</button>

      <label htmlFor="">
        <span>Ordenar</span>
        <select>
          <option value="">Population</option>
          <option value="">Orbital Period</option>
          <option value="">Rotation Period</option>
        </select>
      </label>

      <label htmlFor="">
        <span>Ascendente</span>
        <input type="radio" name="" id="" />
      </label>
      <label htmlFor="">
        <span>Descendente</span>
        <input type="radio" name="" id="" />
      </label>
    </header>
  );
}

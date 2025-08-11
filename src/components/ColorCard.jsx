import React from 'react';
import './ListadoDeColores.css';

const ColorCard = ({ color, onDelete }) => {
  return (
    <div className="color-card">
      <div 
        className="cambio-color"
        style={{ backgroundColor: color }}
      ></div>
      <p className="color-text">{color}</p>
      <button className="btn-delete" onClick={onDelete}>
        Borrar
      </button>
    </div>
  );
};

export default ColorCard;